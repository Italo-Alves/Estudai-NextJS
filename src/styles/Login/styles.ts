import styled from 'styled-components'
import { Input as StyledInput } from '../../components/Form/Input'

export const Main = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  width: 100%;
  max-width: 500px;

  h2 {
    line-height: 3.6rem;
    font-size: 3rem;
    text-align: center;
  }
`

export const Card = styled.div`
  width: 100%;
  margin-top: 2.4rem;

  background: #ffffff;

  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.4rem;

  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  padding: 3rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const BackContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div:first-child {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    input {
      width: 1.6rem;
      height: 1.6rem;
    }

    label {
      font-size: 1.4rem;
    }
  }

  > div:last-child {
    font-size: 1.4rem;
    line-height: 2rem;

    span {
      color: black;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export const ButtonContainer = styled.div`
  > p {
    font-size: 1.4rem;
    margin-top: 1rem;

    span {
      margin-left: 0.5rem;
      font-size: 1.4rem;
      color: #3b82f6;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`
