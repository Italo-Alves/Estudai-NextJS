import { ComponentRef, forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'
import ReactSelect, { OnChangeValue, StylesConfig } from 'react-select'
import { stateOptions } from './SelectOptions'

import { Container, ErrorMessage } from './styles'

interface Props {
  label: string
  handleChange: (newValue: OnChangeValue<Option, false>) => void
  error?: FieldError
}

interface Option {
  label: string
  value: string
}

type SelectProps = React.ComponentProps<typeof ReactSelect> & Props

const selectStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    fontSize: '1.4rem',
    ':hover': {
      boxShadow: 'none',
    },
    ':focus': {
      boxShadow: 'none',
      borderColor: `var(--color-state-focus-border)`,
    },
  }),
  option: (styles) => ({
    ...styles,
    fontSize: '1.4rem',
  }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: '1.4rem',
    color: '#6b7280',
  }),
}

const controlStylesHasError: StylesConfig = {
  control: (styles, state) => ({
    ...styles,
    fontSize: '1.4rem',
    borderColor: state.isFocused
      ? `var(--color-state-focus-border)`
      : 'rgb(229, 62, 62)',
    boxShadow: 'none',
  }),
  option: (styles) => ({
    ...styles,
    fontSize: '1.4rem',
  }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: '1.4rem',
    color: '#6b7280',
  }),
}

const SelectBase: ForwardRefRenderFunction<
  ComponentRef<ReactSelect>,
  SelectProps
> = ({ name, label, handleChange, error, ...rest }, ref) => {
  return (
    <Container>
      {!!label && <label htmlFor={name}>{label}</label>}
      <ReactSelect
        id={name}
        instanceId={name}
        ref={ref}
        name={name}
        options={stateOptions}
        onChange={(target) => handleChange(target as Option)}
        noOptionsMessage={() => 'Sem opções'}
        isSearchable
        styles={!!error ? controlStylesHasError : selectStyles}
        {...rest}
      />
      {!!error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Container>
  )
}

export const Select = forwardRef(SelectBase)
