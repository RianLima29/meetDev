import { createGlobalStyle } from "styled-components";
import { COLOR_BG, COLOR_TEXT } from "./config";

export const GlobalStyles = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    body{
        background-color: ${COLOR_BG};
        overflow-x: hidden;
    }


`