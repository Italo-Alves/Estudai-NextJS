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
  hasRoundedBorder?: boolean
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, hasRoundedBorder, error, ...rest },
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
            hasRoundedBorder={hasRoundedBorder}
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
