import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        max-height: 100vh;
        max-width: 100vw;
        display: flex;
        flex-direction: row;
        justify-content:  center;
        align-items: center;
        font-family: 'Poppins', sans-serif;
    }



`;

export default GlobalStyles;