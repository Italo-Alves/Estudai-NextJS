import styled from "styled-components";

export const Container = styled.main`
  flex: 1;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  max-width: 1350px;
  margin: 0 auto;

  h1 {
    padding-bottom: 1.2rem;
    margin: 1.5rem 2rem 0 2rem;
    border-bottom: 1px solid #3e4247;
  }
`;

export const FormContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Column = styled.div`
  width: 100%;
  max-width: 100%;
  flex: 0 0 100%;

  @media (min-width: 768px) {
    max-width: 41.66667%;
    flex: 0 0 41.66667%;
  }
`;

export const Card = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  word-wrap: break-word;

  background: #ffffff;
  background-clip: border-box;

  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;

  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 3rem 3rem 0;

  > div {
    margin: 14px 0 10px;
  }
`;

export const GridContainer = styled.section`
  display: grid;
  grid-auto-flow: row;
  gap: 10px;
`;

export const FormGroup = styled.div`
  input {
    display: block;

    width: 100%;
    height: 33.5px;

    padding: 0.6rem 1.2rem;

    font-size: 1.6rem;

    color: #24292e;

    border: 1px solid var(--color-input-border);
    border-radius: 5px;

    box-shadow: var(--color-shadow-inset);

    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:focus {
      border-color: var(--color-state-focus-border);
      outline: none;
      box-shadow: var(--color-state-focus-shadow);
    }
  }

  button {
    width: 100%;

    border-radius: 6px;
    padding: 12px 16px;
    background: var(--color-buttons);

    text-transform: uppercase;
    font-weight: bold;

    transition: background-color 0.15s ease-in-out;

    &:disabled {
      background: rgba(36, 41, 46, 0.85);

      color: rgba(255, 255, 255, 0.35);
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: var(--color-buttons-hover);
    }
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 3rem 3rem;
`;

export const Row = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: 4px;

  a {
    color: #000;
    font-size: 1.4rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
