import { createGlobalStyle } from "styled-components";

export const GLobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    font-size: 62.5%;
}

body {
    background: ${({theme})=> theme.background};
    font-family: 'Roboto', sans-serif;
    //font-family: 'Baloo 2', sans-serif;
}

body, input, textarea, button {
    font-size: 1.6rem;
}
button {
    cursor: pointer;
}
a {
    text-decoration: none;
}

ul {
    list-style: none;
}





`