import styled, { css } from 'styled-components'
import NumberFormat, { InputAttributes } from 'react-number-format'

interface Props {
  hasRoundedBorder?: boolean
  isInvalid: boolean
}

export const Container = styled.div`
  label {
    font-size: 1.4rem;
  }
`

const InputBase = css`
  appearance: none;
  display: block;
  width: 100%;

  padding: 0.8rem 1.2rem;
  font-size: 1.4rem;
  color: #111827;

  border: thin solid rgba(209, 213, 219, 1);
  border-radius: 0.6rem;

  transition: border-color 0.15s ease-in-out;

  ${(props: Props) => props.isInvalid && `border-color: rgb(229, 62, 62)`};

  ::placeholder {
    color: #6b7280;
  }

  &:focus {
    border-color: var(--color-state-focus-border);
    outline: none;
  }
`

export const Input = styled.input<Props>`
  ${InputBase};

  &:first-child {
    border-bottom-left-radius: ${(props) => props.hasRoundedBorder && 'unset'};
    border-bottom-right-radius: ${(props) => props.hasRoundedBorder && 'unset'};
  }

  &:last-child {
    border-top-left-radius: ${(props) => props.hasRoundedBorder && 'unset'};
    border-top-right-radius: ${(props) => props.hasRoundedBorder && 'unset'};
  }
`

export const InputMask = styled(NumberFormat<InputAttributes>).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['isInvalid'].includes(prop) && defaultValidatorFn(prop),
})`
  ${InputBase}
`

export const ErrorMessage = styled.div`
  color: #e53e3e;
  margin-top: 0.5rem;
  font-size: 1.2rem;
`

export const Button = styled.button`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;

  font-size: 1.4rem;
  line-height: 2rem;

  border-radius: 0.6rem;
  padding: 0.8rem 1.6rem;
  background: #3f3f46;

  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  color: white;

  &:hover {
    background: #18181b;

    svg {
      color: #a1a1aa;
    }
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;

    box-shadow: 0 0 0 2px #fff, 0 0 0 calc(2px + 2px) #52525b, 0 0 #0000,
      0 0 #0000;
  }

  span {
    position: absolute;
    display: flex;
    align-items: center;
    left: 0;
    padding-left: 1.2rem;

    svg {
      color: #71717a;
    }
  }
`
