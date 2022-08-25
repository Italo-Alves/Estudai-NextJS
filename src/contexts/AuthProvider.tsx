import Router from 'next/router'
import { ReactNode, useState } from 'react'
import { destroyCookie, setCookie } from 'nookies'

import { AuthContext, SignInCredentials } from './AuthContext'
import { api, CommonHeaderProperties } from '../services/api'
import { showToast } from '../components/Form/PopUp'

export interface User {
  email: string
}

interface AuthProviderProps {
  children: ReactNode
}

export function signOut() {
  destroyCookie(undefined, 'estudai.token')
  destroyCookie(undefined, 'estudai.refreshToken')

  Router.push('/login')
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('auth', {
        email,
        password,
      })

      showToast({
        type: 'success',
        message: 'Login feito com sucesso',
        autoClose: 2500,
      })

      const { accessToken, refreshToken } = response.data

      setCookie(undefined, 'estudai.token', accessToken, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      })

      setCookie(undefined, 'estudai.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      })

      setUser({ email })

      api.defaults.headers = {
        Authorization: `Bearer ${accessToken}`,
      } as CommonHeaderProperties

      Router.push('/dashboard')
    } catch (error) {
      console.error(error)

      showToast({
        type: 'error',
        message: 'E-mail ou senha inválido',
        autoClose: 2000,
      })
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}
