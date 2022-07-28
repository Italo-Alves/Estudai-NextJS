import styled from "styled-components";

export const TopFooter = styled.div`
  background: var(--color-box-footer);
  color: var(--color-title-in-primary);
  text-align: center;
  padding: 3rem;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1350px;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const BackFooter = styled.div`
  background: var(--color-header-and-footer);
  color: var(--color-title-in-primary);

  padding: 2rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span:first-child {
    font-size: 12px;
  }
`

export const ListMenu = styled.ul`
  line-height: 2rem;
  
  li {
    font-size: 1.4rem;

    > a {
      color: var(--color-title-in-primary);

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Links = styled.ul`
  display: flex;
  gap: 0.5rem;

  li {
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      opacity: 0.6;
    }
  }
`

export const Title = styled.h1  `
  font-size: 1.6rem;
  padding-bottom: 5px;
  font-weight: 700;
  margin-bottom: 0.8rem;

  color: unset;
`;