import { ButtonHTMLAttributes, ReactNode } from 'react'
import { LockSimple } from 'phosphor-react'

import { Button as StyledButton } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button = ({ children, type, ...rest }: ButtonProps) => {
  return (
    <StyledButton type={type} {...rest}>
      {children}
      <span>
        <LockSimple weight="duotone" size={20} />
      </span>
    </StyledButton>
  )
}
