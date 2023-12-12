import styled from "styled-components";

export const OrderContainer = styled.div`


`

export const Content = styled.main`
    width: min(112rem, 95%);
    margin: 8rem auto;   
    display: flex;
    justify-content: space-between;
    align-items: end;
    .section-one {

        h1 {
            color: ${({theme})=> theme["yellow-dark"]};
            font-weight: 900;
            font-size: 3.2rem;
            line-height: 1.3;
        }

        p {
            color: ${({theme})=> theme["base-subtitle"]};
            margin-top: 0.4rem;
            font-size: 2rem;
            line-height: 1.3;
        }



    }

    > img {
   
        height: 29.3rem;
        display: block;
        object-fit: cover;
    }




`

export const Details = styled.div`
    border-radius: 6px 36px 6px 36px;
    border: 1px solid rgba(219, 172, 44, 1);
    padding: 4rem;
    margin-top: 4rem;
    display: grid;
    gap: 3.2rem;
    max-width: 52.6rem;
    > div {
        display: flex;
        gap: 1.2rem;
    }


`