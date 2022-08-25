import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'
import NumberFormat, {
  FormatInputValueFunction,
  InputAttributes,
  NumberFormatProps,
} from 'react-number-format'

import { Container, InputMask as StyledInputMask, ErrorMessage } from './styles'

interface InputProps extends Omit<NumberFormatProps, 'onChange'> {
  name: string
  format: string | FormatInputValueFunction
  onChange: (value: string) => void
  label?: string
  error?: FieldError
}

const InputMaskBase: ForwardRefRenderFunction<
  NumberFormat<InputAttributes>,
  InputProps
> = ({ name, label, format, onChange, error, ...rest }, ref) => {
  return (
    <Container>
      {!!label && <label htmlFor={name}>{label}</label>}
      <StyledInputMask
        id={name}
        ref={ref}
        format={format}
        name={name}
        onValueChange={({ value }) => {
          onChange(value)
        }}
        isInvalid={!!error}
        {...rest}
      />
      {!!error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Container>
  )
}

export const InputMask = forwardRef(InputMaskBase)
