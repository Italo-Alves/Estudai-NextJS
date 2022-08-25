import { createContext } from 'react'
import { User } from './AuthProvider'

export interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>
  user?: User
  isAuthenticated: boolean
}

export const AuthContext = createContext({} as AuthContextData)
