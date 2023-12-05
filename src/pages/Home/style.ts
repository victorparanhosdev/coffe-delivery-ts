import styled from "styled-components";

export const HomeContainer = styled.div``;

export const Content = styled.main`
  width: min(112rem, 95%);
  margin: auto;
`;

export const SectionOne = styled.section`
  min-height: 54.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    max-width: 58.8rem;
    h1 {
      font-size: 4.8rem;
      color: ${({ theme }) => theme["base-title"]};
      line-height: 1.3;
      font-weight: 900;
    }
    > p {
      margin-top: 1.6rem;
      font-size: 2rem;
      line-height: 1.3;
    }
    ul {
      margin-top: 6.6rem;
      display: grid;
      grid-template-columns: auto auto;
      gap: 2rem 4rem;

      li {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        svg {
          min-width: 3.2rem;
          padding: 0.8rem;
          border-radius: 50%;
          color: ${({ theme }) => theme.white};
          background-color: green;
        }

        p {
          color: ${({ theme }) => theme["base-text"]};
          line-height: 1.3;
        }

        &:nth-child(1) svg {
          background: ${({ theme }) => theme["yellow-dark"]};
        }
        &:nth-child(2) svg {
          background: ${({ theme }) => theme["base-text"]};
        }
        &:nth-child(3) svg {
          background: ${({ theme }) => theme["yellow"]};
        }
        &:nth-child(4) svg {
          background: ${({ theme }) => theme.purple};
        }
      }
    }
  }
`;

export const SectionTwo = styled.section`
  margin-bottom: 15rem;
  > h1 {
    font-size: 3.2rem;
    line-height: 1.3;
    font-weight: 900;
    color: ${({ theme }) => theme["base-subtitle"]};
    margin-bottom: 5.4rem;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25.6rem, 1fr));
    gap: 4rem 3.2rem;
    text-align: center;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  background: ${({ theme }) => theme["base-card"]};
  border-radius: 6px 36px 6px 36px;
  margin-top: 5.4rem;
  min-height: 31rem;
  padding: 1.6rem;

  img {
    min-height: 12rem;
    height: 12rem;


  }

  > div:has(span) {
    margin-top: 1.2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    span {
      background: ${({ theme }) => theme["yellow-light"]};
      color: ${({ theme }) => theme["yellow-dark"]};
      padding: 0.4rem 0.8rem;
      border-radius: 100px;
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: 900;
      line-height: 1.3;
    }

  }

  h1 {
      margin-top: 1.6rem;
      font-size: 2rem;
      font-weight: bold;
      line-height: 1.3;
    }
    label {
      color: ${({ theme }) => theme["base-label"]};
      font-size: 1.4rem;
      line-height: 1.3;
      margin-top: 0.8rem;
      margin-bottom: 3.3rem;
    }


`;

export const Buy = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.3rem;

        > p {
          font-size: 1.4rem;
          color: ${({ theme }) => theme["base-text"]};
            strong {
              font-size: 2.4rem;
                font-family: 'Baloo 2', sans-serif;
              font-weight: 900;
            }

        }

      

          


`

export const Action = styled.div`
            display: flex;
            align-items: center;
            gap: 0.8rem;
            
          > div {
            background: ${({ theme }) => theme["base-button"]};
            display: flex;
            padding: 0.9rem 1.2rem;
            border-radius: 6px;
            gap: 0.4rem;
              button {
                display: flex;
                align-items: center;
                border: 0;
                background: transparent;
              }

              input {
                text-align: center;
                background: transparent;
                border: 0;
                width: 2rem;
                color: ${({ theme }) => theme["base-title"]}

              }

          }


     

        > button {
            border: 0;
            background: ${({ theme }) => theme["purple-dark"]};
            color: ${({ theme }) => theme.white};
            display: flex;
            padding: 0.8rem;
            border-radius: 6px;
            min-width: 2.2rem;
        }
`
