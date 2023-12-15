import styled from "styled-components";
import Background from "/assets/Background.svg";

export const SectionOne = styled.section`
  position: relative;
  &::after {
    position: absolute;
    top: 0px;
    content: "";
    z-index: -1;
    display: block;
    width: 100%;
    height: 100%;
    background: url(${Background}) no-repeat;
    background-size: cover;
    background-position: center;
  }

  > div {

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    width: min(112rem, 95%);
    margin: auto;
    padding: 9.4rem 0 10.8rem;

    @media (max-width: 768px){
      justify-content: center;
      gap: 4rem;
      padding: 6rem 0;
      flex-wrap: wrap;
      }

 


    > div {
      max-width: 58.8rem;
      @media (max-width: 768px){
      order: 2;
      }

      h1 {
        @media (max-width: 768px){
          font-size: clamp(1.8rem, 5vw + 1rem, 4.8rem);
          text-align: center;
      }
        font-size: 4.8rem;
        color: ${({ theme }) => theme["base-title"]};
        line-height: 1.3;
        font-weight: 900;
      }
      > p {
        @media (max-width: 768px){
          font-size: clamp(1.4rem, 1vw + 1rem, 2rem);
          text-align: center;
      }
        margin-top: 1.6rem;
        font-size: 2rem;
        line-height: 1.3;
      }
      ul {
        margin-top: 6.6rem;
        display: grid;
        grid-template-columns: auto auto;
        gap: 2rem 4rem;
        @media (max-width: 450px){
          grid-template-columns:auto;
          place-content: center;
      }
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

    img {
      width: clamp(30rem, 38vw + 1rem, 47.6rem);
      display: block;
      
    @media (max-width: 768px){
      width: clamp(30rem, 55vw + 1rem, 47.6rem);
      }

   }



   }
`;

export const SectionTwo = styled.section`
  width: min(112rem, 95%);
  margin: auto;
  padding-block: 3.2rem;
  > h1 {
    font-size: 3.2rem;
    line-height: 1.3;
    font-weight: 900;
    color: ${({ theme }) => theme["base-subtitle"]};
  }

  > div {
    margin-top: 5.4rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25.6rem, 1fr));
    gap: 4rem 3.2rem;
    text-align: center;
  }
`;


