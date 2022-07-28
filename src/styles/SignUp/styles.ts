import styled from 'styled-components'

export const Container = styled.main`
  flex: 1;

  max-width: 1350px;
  margin: 0 auto;
  width: 100%;

  > h2 {
    line-height: 3.6rem;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 2.4rem;
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`

export const Card = styled.section`
  background: #fff;

  padding: 1.6rem 3rem;

  /* border: 1px solid var(--color-text-in-primary); */
  border-radius: 0.4rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
`

export const BlockPersonalData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (min-width: 768px) {
    display: flex;
    flex-flow: row wrap;

    div {
      flex: 0 0 calc((100% / 2) - 0.4rem);
    }
  }
`

export const BlockAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    display: flex;
    flex-flow: row wrap;

    > div:not(:last-child) {
      flex: 0 0 calc((100% / 2) - 0.5rem);
      max-width: calc((100% / 2) - 0.5rem);
    }

    > div:last-child {
      flex: 1;
    }
  }

  @media (min-width: 1280px) {
    display: flex;
    flex-flow: row wrap;

    > div:first-child {
      flex: 0 0 16%;
      max-width: 16%;
    }

    > div:nth-child(2) {
      flex: 0 0 33%;
      max-width: 33%;
    }

    > div:nth-child(3) {
      flex: 0 0 50%;
      max-width: 50%;
    }

    > div:nth-child(4) {
      flex: 0 0 50%;
      max-width: 50%;
    }

    > div:nth-child(5) {
      flex: 0 0 16%;
      max-width: 16%;
    }

    > div:nth-child(6) {
      flex: 0 0 8%;
      max-width: 8%;
    }

    > div:last-child {
      flex: 0 0 24.7%;
      max-width: 24.7%;
    }
  }
`

export const BlockContact = styled(BlockPersonalData)``

export const BlockLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (min-width: 768px) {
    display: flex;
    flex-flow: row wrap;

    div {
      flex: 0 0 50%;
    }

    div:not(:first-child) {
      flex: 0 0 calc((50% / 2) - 0.8rem);
    }
  }
`
