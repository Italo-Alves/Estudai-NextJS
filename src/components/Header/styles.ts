import styled from 'styled-components'

export const Container = styled.header`
  background: var(--color-header-and-footer);
  padding: 1.4rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 2rem;
`

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;

  a {
    font-size: 2rem;
  }

  input {
    background: var(--color-search);
    color: var(--color-text-search);

    border-radius: 0.4rem;
    padding: 0.6rem 1.2rem;
    width: 100%;
    transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);
    border: transparent;

    @media (min-width: 768px) {
      &:focus {
        width: 318px;
        outline: none;
      }
    }

    &::placeholder {
      color: hsla(0, 0%, 100%, 0.75);
    }
  }
`

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  a {
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      opacity: 0.6;
    }
  }
`
