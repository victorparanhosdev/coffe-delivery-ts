import styled from "styled-components";

export const PaymentContainer = styled.div`


`
export const Content = styled.main`
    width: min(112rem, 95%);
    margin: 4rem auto;   
    display: grid;
    grid-template-columns: auto 44.8rem;
    gap: 3.2rem;

    h1 {
    color: ${({ theme }) => theme["base-title"]};
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    line-height: 1.3;

}


`

export const Section = styled.section`

> div {
    padding: 4rem;
    background: ${({ theme }) => theme["base-card"]};
    border-radius: 0.6rem;
}
> div + div {
    margin-top: 1.2rem;
}
.section-one {
    display: flex;
    gap: 0.8rem;
    align-items: flex-start;
    margin-bottom: 3.2rem;

    svg {
        color: ${({ theme }) => theme["yellow-dark"]};
    }
    > div {
    
        h2 {
            color: ${({ theme }) => theme["base-subtitle"]};
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 1.3;
        }
        p {
            color: ${({ theme }) => theme["base-text"]};
            font-size: 1.4rem;
            font-weight: 400;
        }
    }
}

form {
    
    input {
        font-size: 1.4rem;
        height: 4.2rem;
        border: 1px solid  ${({ theme }) => theme["base-button"]};
        outline: none;
        border-radius: 4px;
        background: ${({ theme }) => theme["base-input"]};
        color: ${({ theme }) => theme["base-text"]};
        padding: 1.2rem;
        width: 100%;
        &::placeholder {
            color: ${({ theme }) => theme["base-label"]};
        }

        &:focus{
            border: 1px solid  ${({ theme }) => theme["yellow-dark"]};
        }

    }
    input[name="cep"]{
        width: 20rem;
        margin-bottom: 1.6rem;
    }
    input[name="rua"]{
        width: 100%;
        margin-bottom: 1.6rem;
    }

    > div {
        display: flex;
        gap: 1.2rem;
        input[name="numero"]{
        width: 20rem;
        }
        input[name="uf"]{
        flex: 1;
        }
        input[name="cidade"]{
        flex: 5;
        }
        input[name="bairro"]{
        width:20rem;
        }
    }

    > div + div {
        margin-top: 1.6rem;
    }
}

.section-two {
    display: flex;
    gap: 0.8rem;
    align-items: flex-start;
    margin-bottom: 3.2rem;

    svg {
        color: ${({ theme }) => theme.purple};
    }
    > div {
    
    h2 {
        color: ${({ theme }) => theme["base-subtitle"]};
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.3;
    }
    p {
        color: ${({ theme }) => theme["base-text"]};
        font-size: 1.4rem;
        font-weight: 400;
    }
}
}

.payment {
    display: flex;
    gap: 1.2rem;

    button {
        width: 100%;
        border: 1px solid transparent;
        background: ${({ theme }) => theme["base-button"]};
        color: ${({ theme }) => theme["base-text"]};;
        border-radius: 6px;
        display: flex;
        gap: 1.2rem;
        align-items: center;

        padding: 1.6rem;
        text-transform: uppercase;
        font-size: 1.2rem;
        line-height: 1.6;
        white-space: nowrap;
        transition: background 0.2s, color 0.2s;
        &:hover{
            background: ${({ theme }) => theme["base-hover"]};
            color: ${({ theme }) => theme["base-subtitle"]};;
        }
        &:active {
            border: 1px solid ${({ theme }) => theme.purple};
        }
        svg {
            color: ${({ theme }) => theme.purple};;
        }
    }
}
`


export const Aside = styled.aside`
 > div {
    padding: 4rem;
    background: ${({ theme }) => theme["base-card"]};
    border-radius: 0.6rem 4.4rem 0.6rem 4.4rem;
}


`

export const CardSelect = styled.div`
display: flex;
gap: 5rem;
padding-bottom: 2.4rem;
border-bottom: 1px solid ${({ theme }) => theme["base-button"]};
margin-bottom: 2.4rem;

> div {
    display: flex;
    align-items: flex-start;
  


}



.details {

    h2 {
    color: ${({ theme }) => theme["base-subtitle"]};
    font-size: 1.6rem;
    line-height: 1.3;
    font-weight: 400;

  
    }

> div {
    display: flex;



    }

    input {
        width: 4rem;
    }


}


`

export const PriceContent = styled.div`

> div {
    display: flex;
    justify-content: space-between;
}
button {
   background: ${({ theme }) => theme.yellow};
   color: ${({ theme }) => theme.white};
   text-transform: uppercase;
   font-size: 1.4rem;
   line-height: 1.6;
   font-weight: 700;
   padding: 1.2rem;
   width: 100%;
   border-radius: 6px;
   border: none;
   margin-top: 2.4rem;
   transition: background 0.2s;
   &:hover {
    background: ${({ theme }) => theme["yellow-dark"]};
   }
}
`