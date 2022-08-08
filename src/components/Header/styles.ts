import styled from 'styled-components'

export const Container = styled.header`
  background: var(--slate-400);
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
    background: var(--gray-600);
    color: var(--white-800);

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
      color: var(--gray-50);
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
