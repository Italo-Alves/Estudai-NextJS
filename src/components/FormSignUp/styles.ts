import styled from "styled-components";

import { Input as UnformInput } from "./Input";
import { InputMask as InputMasked } from "./InputMask";

export const Container = styled.div`
  padding: 0.5rem 0 0.25rem;
  .select {
    font-size: 1.4rem;
    color: #24292e;
  }

  .react-select__control {
    height: 33.5px;
    min-height: unset;

    > div {
      height: 33.5px;
    }
  }

  .react-select__placeholder {
    color: #24292e;
    font-family: Poppins, sans-serif;
    font-size: 1.4rem;
  }
`;

export const Input = styled(UnformInput)`
  width: 100%;
  height: 33.5px;

  border: 1px solid var(--color-input-border);
  border-radius: 5px;
  padding: 0.6rem 1.2rem;

  box-shadow: var(--color-shadow-inset);

  color: #24292e;

  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    box-shadow: var(--color-state-focus-shadow);
    border-color: var(--color-state-focus-border);
  }
`;

export const InputMask = styled(InputMasked)`
  width: 100%;
  height: 33.5px;

  border: 1px solid var(--color-input-border);
  border-radius: 5px;
  padding: 0.6rem 1.2rem;

  box-shadow: var(--color-shadow-inset);

  color: #24292e;

  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    box-shadow: var(--color-state-focus-shadow);
    border-color: var(--color-state-focus-border);
  }
`;

export const ContentForm = styled.div`
  margin: 0.5rem 1.5rem 0.5rem;
`;

export const Block = styled.div`
  background: #fff;

  padding: 1rem;

  border: 1px solid var(--color-text-in-primary);
  border-radius: 10px;

  > h1 {
    margin-bottom: 1rem;
  }

  &:not(:first-child) {
    margin-top: 1rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  .required {
    label:after {
      content: "*";
      color: red;
    }
  }
`;

export const FormGroup = styled.div`
  max-width: 100%;
  flex: 0 0 100%;
  padding: 0 0.5rem;
  margin-bottom: 1rem;

  > span {
    font-size: 1.3rem;
    color: rgb(211, 66, 66);
    padding-top: 7px;
  }

  @media (min-width: 768px) {
    &.col1 {
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }

    &.col2 {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }

    &.col3 {
      flex: 0 0 25%;
      max-width: 25%;
    }

    &.col4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }

    &.col5 {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }

    &.col6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
`;

export const ContentButton = styled.div`
  margin: 0 1.5rem;

  div {
    padding-left: 0.3rem;
  }

  div:first-child {
    small {
      font-size: 1.3rem;
      color: black;

      span {
        color: red;
      }
    }
  }

  div:last-child {
    margin: 1rem 0;

    button {
      width: 100%;
      background: var(--color-buttons);
      padding: 1.2rem 1.6rem;

      border-radius: 6px;

      transition: background-color 0.15s ease-in-out;

      &:hover {
        background: var(--color-buttons-hover);
      }
    }
  }
`;

// export const Legend = styled.div`
//   padding-left: 1rem;
//   margin: 0 0 0.5rem 1rem;

//   small {
//     font-size: 1.3rem;

//     span {
//       color: red;
//     }
//   }
// `
