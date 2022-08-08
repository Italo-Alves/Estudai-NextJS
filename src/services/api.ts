/* eslint-disable prefer-const */
import axios, { AxiosError } from "axios";
import { parseCookies, setCookie } from "nookies";
import { HeadersDefaults } from 'axios'
import { signOut } from "../contexts/AuthProvider";

export interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

interface ErrorProps {
  error: string
}

interface FailedRequestsQueueProps {
  onSuccess: (token: string) => void
  onFailure: (error: AxiosError) => void
}

let cookies = parseCookies()
let isRefreshing = false
let failedRequestsQueue: FailedRequestsQueueProps[] = [];

export const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    Authorization: `Bearer ${cookies['estudai.token']}`
  }
});

api.interceptors.response.use(response => {
  return response
}, (error: AxiosError<ErrorProps>) => {
  if (error.response?.status === 401) {
    if (error.response.data?.error === 'JWT token expired') {
      cookies = parseCookies()

      const { 'estudai.refreshToken': refreshToken } = cookies
      const originalConfig = error.config

      if (!isRefreshing) {
        isRefreshing = true

        api.post('/refresh-token', { token: refreshToken }).then(response => {
          const { accessToken } = response.data
  
          setCookie(undefined, 'estudai.token', accessToken, {
            maxAge: 60 * 60 * 24 * 30,
            path: '/'
          })
  
          setCookie(undefined, 'estudai.refreshToken', response.data.refreshToken, {
            maxAge: 60 * 60 * 24 * 30,
            path: '/'
          })
  
          api.defaults.headers = {
            Authorization: `Bearer ${accessToken}`
          } as CommonHeaderProperties

          failedRequestsQueue.forEach(request => request.onSuccess(accessToken))
          failedRequestsQueue = []
        }).catch(err => {
          failedRequestsQueue.forEach(request => request.onFailure(err))
          failedRequestsQueue = []
        }).finally(() => {
          isRefreshing = false
        })
      }

      return new Promise((resolve, reject) => {
        failedRequestsQueue.push({
          onSuccess: (token) => {
            originalConfig.headers = {
              Authorization: `Bearer ${token}`
            }
            resolve(api(originalConfig))
          },
          onFailure: (err) => {
            reject(err)
          }
        })
      })
    } else {
      signOut()
    }
  }

  return Promise.reject(error)
})