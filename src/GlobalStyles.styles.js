import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

    body{
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
`

export default GlobalStyles