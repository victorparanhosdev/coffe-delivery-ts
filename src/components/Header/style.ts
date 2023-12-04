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

button {
    display: flex;
    align-items: center;
    background: ${({theme})=> theme["yellow-light"] };
    border: none;
    color: ${({theme})=> theme["yellow-dark"] };
    padding: 0.8rem;
    border-radius: 0.6rem;
}



`