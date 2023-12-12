import styled from "styled-components"

export const CardSelect = styled.div`
display: flex;
justify-content: space-between;
padding-bottom: 2.4rem;
border-bottom: 1px solid ${({ theme }) => theme["base-button"]};
margin-bottom: 2.4rem;

> div {
    display: flex;
    align-items: flex-start;
    gap: 2rem;

    img {
        min-width: 6.4rem;
        height: 6.4rem;
        object-fit: cover;
        display: block;
    }
  


}
> span {
    font-weight: 800;
    font-size: 1.6rem;
    line-height: 1.3;
}


.details {

    h2 {
    color: ${({ theme }) => theme["base-subtitle"]};
    font-size: 1.6rem;
    line-height: 1.3;
    font-weight: 400;
    margin-bottom: 0.8rem;

  
    }
    > div {
        display: flex;
        gap: 0.8rem;

        > button {

            display: flex;
            align-items: center;
            justify-content: center;
            text-transform: uppercase;
            border-radius: 6px;
            border: none;
            background: ${({ theme }) => theme["base-button"]};
            color: ${({ theme }) => theme["base-text"]};
            font-size: 1.2rem;
            padding: 0.6rem 0.8rem;
            line-height: 1.6;
            gap: 0.4rem;
            transition: color 0.2s, background 0.2s;
            svg {
            transition: color 0.2s;
            color: ${({ theme }) => theme.purple}; 
            }
            &:hover svg{
                color: ${({ theme }) => theme["purple-dark"]};
            }

            &:hover {
                background: ${({ theme }) => theme["base-hover"]};
                color: ${({ theme }) => theme["base-subtitle"]};;
            }

        }
    }


    .box-buttonmaxminus {

        display: flex;
        align-items: center;
        width: 7.2rem;
        padding: 0.5rem 0.8rem;
        border-radius: 6px;
        background:  ${({ theme }) => theme["base-button"]};

        button {
            border: none;
            background: transparent;
            display: flex;
        
        }
        input {
        width: 100%;
        color:  ${({ theme }) => theme["base-title"]};
        font-size: 1.6rem;

        font-weight: 400;
        background: transparent;
        border: none;
        text-align: center;
        }
        svg {
          
            color: ${({ theme }) => theme.purple};
            transition: color 0.2s;
            &:hover {
                color: ${({ theme }) => theme["purple-dark"]};
            }

    }
}
}

`
