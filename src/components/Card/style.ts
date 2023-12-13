import styled from "styled-components"

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-content: space-between;
  background: ${({ theme }) => theme["base-card"]};
  border-radius: 6px 36px 6px 36px;
  min-height: 31rem;
  padding: 1.6rem;

  img {
    min-height: 12rem;
    margin-top: -3rem;
    place-self: center;
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
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 3;
    word-break: break-word;
  }
`;

export const Buy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;


  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme["base-text"]};
    display: flex;
    align-items: center;
    justify-content: center;
   
   

    strong {
      margin-left: 0.3rem;
      font-size: 2.4rem;
      font-family: "Baloo 2", sans-serif;
      font-weight: 900;
   

    }
  }
`;

