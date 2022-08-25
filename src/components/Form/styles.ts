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
  color: var(--slate-500);

  border: thin solid var(--white-200);
  border-radius: 0.6rem;

  transition: border-color 0.15s ease-in-out;

  ${(props: Props) => props.isInvalid && `border-color: var(--red-500)`};

  ::placeholder {
    color: var(--gray-100);
  }

  &:focus {
    border-color: var(--blue-600);
    outline: none;
  }
`

export const Input = styled.input<Props>`
  ${InputBase};

  &:first-child {
    border-bottom-left-radius: ${(props) =>
      props.hasRoundedBorder && !props.isInvalid && 'unset'};
    border-bottom-right-radius: ${(props) =>
      props.hasRoundedBorder && !props.isInvalid && 'unset'};
  }

  &:last-child {
    border-top-left-radius: ${(props) =>
      props.hasRoundedBorder && !props.isInvalid && 'unset'};
    border-top-right-radius: ${(props) =>
      props.hasRoundedBorder && !props.isInvalid && 'unset'};
  }
`

export const InputMask = styled(NumberFormat<InputAttributes>).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['isInvalid'].includes(prop) && defaultValidatorFn(prop),
})`
  ${InputBase}
`

export const ErrorMessage = styled.div`
  color: var(--red-500);
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

  border: none;
  border-radius: 0.6rem;
  padding: 0.8rem 1.6rem;
  background: var(--gray-400);

  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  color: var(--white-900);

  &:hover {
    background: var(--gray-700);

    svg {
      color: var(--gray-250);
    }
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;

    box-shadow: 0 0 0 2px #fff, 0 0 0 calc(2px + 2px) var(--gray-350), 0 0 #0000,
      0 0 #0000;
  }

  span {
    position: absolute;
    display: flex;
    align-items: center;
    left: 0;
    padding-left: 1.2rem;

    svg {
      color: var(--gray-300);
    }
  }
`
