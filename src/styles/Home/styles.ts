import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.main`
  max-width: 1350px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  section:last-child {
    padding: 3rem 1rem 0;
    text-align: center;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0 1rem 0;

  a {
    width: 270px;
    padding: 3rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2rem;

    background: var(--color-buttons);

    transition: background-color 0.15s ease-in-out;

    &:hover {
      background: var(--color-buttons-hover);
      text-decoration: none;
      color: var(--color-line-in-white);
    }

    &:first-child {
      margin-right: 1rem;
    }

    img {
      margin-right: 1rem;
    }

    span {
      color: unset;
    }
  }
`;

export const ContainerServices = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  padding: 1rem 1rem 0 1rem;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const Service = styled.div`
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 1rem;
  border: 1px solid var(--color-text-in-primary);
  background-color: var(--color-box-base);

  padding: 3rem 3rem 1rem 3rem;

  @media (min-width: 992px) {
    max-width: 68%;
    margin-bottom: unset;
  }

  strong {
    font-size: 2.6rem;
  }
`;

export const ContainerCourses = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const IconBlock = styled.div`
  width: 50%;
  text-align: center;

  img {
    width: auto;
  }

  @media (min-width: 768px) {
    width: 20%;
    padding: 0 0.7rem;

    img {
      width: 110px;
    }
  }

  p {
    font-size: 1.5rem;
    font-weight: bolder;
    font-family: "Archivo", sans-serif;

    color: black;
  }
`;
export const ContainerNewsletter = styled.div`
  max-width: 100%;

  @media (min-width: 996px) {
    max-width: 30%;
  }
`;
export const Newsletter = styled.div`
  height: 100%;

  background: var(--color-box-base);
  border: 1px solid var(--color-text-in-primary);
  border-radius: 10px;

  padding: 1.6rem;

  > div:first-child {
    font-size: 18px;
    margin-bottom: 20px;

    color: black;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;

  div:last-child {
    margin-bottom: 1rem;
  }
`;

export const Column = styled.div`
  width: 100%;
  padding: 0 15px;

  > div {
    margin-bottom: 1rem;
  }

  label {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
`;

export const Input = styled.input`
  display: block;

  width: 100%;
  height: 32px;

  padding: 5px 12px;

  font-size: 14px;
  line-height: 20px;

  background: var(--color-box-base);

  color: #24292e;

  border: 1px solid var(--color-input-border);
  border-radius: 6px;
  outline: none;

  box-shadow: var(--color-shadow-inset);

  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: var(--color-state-focus-border);
    outline: none;
    box-shadow: var(--color-state-focus-shadow);
  }
`;
export const Button = styled.button`
  width: 100%;

  border-radius: 6px;
  padding: 12px 16px;
  background: var(--color-buttons);

  transition: background-color 0.15s ease-in-out;

  &:hover {
    background: var(--color-buttons-hover);
  }

  b {
    color: unset;
  }
`;

export const ContainerWhy = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 600;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin-bottom: 2.5rem;
  }
`;

export const Item = styled.div`
  padding: 0 1rem;
  width: 100%;

  @media (min-width: 996px) {
    width: 33.3333%;
  }

  img {
    vertical-align: middle;
    max-width: 180px;
  }

  h4 {
    margin: 1.5rem 0 0.4rem;
    font-size: 1.8rem;
  }

  p {
    font-size: 1.4rem;
    color: black;
  }
`;
