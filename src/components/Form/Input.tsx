import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'
import { FieldError } from 'react-hook-form'

import { Input as StyledInput, Container, ErrorMessage } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error, ...rest },
  ref
) => {
  return (
    <>
      {!!label ? (
        <Container>
          <label htmlFor={name}>{label}</label>
          <StyledInput
            id={name}
            ref={ref}
            name={name}
            isInvalid={!!error}
            {...rest}
          />
          {!!error && <ErrorMessage>{error.message}</ErrorMessage>}
        </Container>
      ) : (
        <>
          <StyledInput
            id={name}
            ref={ref}
            name={name}
            loginBorderStyle={!error}
            isInvalid={!!error}
            {...rest}
          />
          {!!error && <ErrorMessage>{error.message}</ErrorMessage>}
        </>
      )}
    </>
  )
}

export const Input = forwardRef(InputBase)
