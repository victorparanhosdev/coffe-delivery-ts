import styled from "styled-components"

export const HeaderContainer = styled.header`
height: 10.4rem;
display: flex;
align-items: center;


nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: min(112rem, 95%);
    margin: auto;

}

`

export const Menu = styled.menu`
    display: flex;
    gap: 1.2rem;

> div {
    background: ${({theme})=> theme["purple-light"]};
    display: flex;
    align-items: center;

    padding: 0.8rem;
    border-radius: 0.6rem;
    gap: 0.4rem;
    
    span {
        color: ${({theme})=> theme["purple-dark"]};
        font-size: 1.4rem;

    }
    svg {
        min-width: 2.2rem;
        color: ${({theme})=> theme.purple};
    }
}

a {
    display: flex;
    align-items: center;
    background: ${({theme})=> theme["yellow-light"] };
    border: none;
    color: ${({theme})=> theme["yellow-dark"] };
    padding: 0.8rem;
    border-radius: 0.6rem;
    position: relative;
    
    span {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${({theme})=> theme["yellow-dark"] };
        color: ${({theme})=> theme.white};
        font-size: 1.2rem;
        font-weight: 900;
        line-height: 1.3;
        border-radius: 100px;
        height: 2rem;
        width: 2rem;
        top: -0.5rem;
        right: -0.8rem;
    }
}



`