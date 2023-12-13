import styled from "styled-components"


export const Action = styled.div`
  display: flex;
  align-items: center;
 

  > div {
    background: ${({ theme }) => theme["base-button"]};
    display: flex;
    padding: 0.8rem;
    border-radius: 6px;
    gap: 0.4rem;
    width: 7.2rem;
    button {
  
      width: 3.8rem;
      color: ${({ theme }) => theme.purple};
      display: flex;
      align-items: center;
      border: 0;
      background: transparent;
      transition: color 0.2s;
      &:hover {
        color: ${({ theme }) => theme["purple-dark"]};
      }
    }

    input {
      text-align: center;
      background: transparent;
      border: 0;
      width: 2rem;
      color: ${({ theme }) => theme["base-title"]};
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
    transition: background 0.2s;
    margin-left: 0.8rem;

    &:not(:disabled):hover {
      background: ${({ theme }) => theme["purple"]};
    }

    &:disabled{
            cursor: auto;
            opacity: 0.5;
        }


  }

 
`;