import styled from "styled-components";


export const Form = styled.form`
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

@media (max-width: 450px) {
    grid-template-columns: auto;
}


`

export const Section = styled.section`
    span {
        font-size: 1.2rem;
        color: ${({ theme }) => theme["yellow-dark"]};
 
    }

> div {
    padding: 4rem;
    background: ${({ theme }) => theme["base-card"]};
    border-radius: 0.6rem;
    @media (max-width: 450px) {
    padding: 4rem 1rem;
    }

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
            @media (max-width: 450px){
                font-size: 1.2rem;
                margin-top: 0.5rem;
            }
        }
    }
}

.inputForm {
display: grid;
grid-template-areas:
    'cep . .'
    'rua rua rua'
    'numero complemento complemento'
    'bairro cidade uf';
grid-template-columns: 20rem 1fr 6rem;
gap: 1.6rem 1.2rem;

@media (max-width: 450px) {
        grid-template-areas: 
        'cep cep cep'
        'rua rua rua'
        'numero complemento complemento'
        'bairro bairro bairro'
        'cidade cidade uf';

        grid-template-columns: 2fr 1fr 10rem;


    }
  
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
 
    div:has(input[id="cep"]){
        grid-area: cep;
    }
    div:has(input[id="rua"]){
        grid-area: rua;
    }
    div:has(input[id="numero"]){
        grid-area: numero;
    }
    div:has(input[id="complemento"]){
        grid-area: complemento;
        position: relative;

        input {
            padding-right: 6rem;
        }
        i {
            position: absolute;
            right: 1rem;
            font-size: 1.2rem;
            color: ${({ theme }) => theme["base-label"]};
            line-height: 1.3;
            top: 50rem;
            transform: translateY(-48.7rem);
        }
        
    
    }
    div:has(input[id="bairro"]){
        grid-area: bairro;
    }
    div:has(input[id="cidade"]){
        grid-area: cidade;
    }
    div:has(input[id="uf"]){
        grid-area: uf;
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
        @media (max-width: 450px){
                font-size: 1.2rem;
                margin-top: 0.5rem;
            }

    }
}
}

.payment {
    display: flex;
    gap: 1.2rem;

    label {
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
        cursor: pointer;
     


        input {
            display: none;
        }

        &:hover{
            background: ${({ theme }) => theme["base-hover"]};
            color: ${({ theme }) => theme["base-subtitle"]};;
        }
        &.active {
            border: 1px solid ${({ theme }) => theme.purple};
            background: ${({ theme }) => theme["purple-light"]};
        }
        svg {
            color: ${({ theme }) => theme.purple};
            min-width: 1.6rem;
        }
    }
    @media (max-width: 450px) {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
        label {
            font-size: 1rem;
        }
    }

}
`


export const Aside = styled.aside`
 > div {
    padding: 4rem;
    background: ${({ theme }) => theme["base-card"]};
    border-radius: 0.6rem 4.4rem 0.6rem 4.4rem;
    @media (max-width: 450px){
        padding: 4rem 2rem;
    }
}
`


export const PriceContent = styled.div`
display: grid;
gap: 1.2rem;

> div {
    display: flex;
    justify-content: space-between;

    span {
        font-size: 1.4rem;
        color: ${({ theme }) => theme["base-text"]};
    }
    span:nth-child(2){
        font-size: 1.6rem;
    }

}

> div:nth-child(3) {
    span {
        color: ${({ theme }) => theme["base-subtitle"]};
        font-size: 2rem;
        font-weight: 800;
    }
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
   margin-top: 1.2rem;
   transition: background 0.2s;
   &:hover {
    background: ${({ theme }) => theme["yellow-dark"]};
   }
}
`