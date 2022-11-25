import { createGlobalStyle } from "styled-components";
import { COLOR_BG, COLOR_DARK } from "./config";

export const GlobalStyles = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;

        &::-webkit-scrollbar{
            background-color:${COLOR_DARK};
            width: 10px;
            padding: 5px;
        }
        &::-webkit-scrollbar-thumb{
            background-color: #c9c9c9c9;
            border-radius: 10px;
        }
    }
    body{
        background-color: ${COLOR_BG};
        overflow-x: hidden;
    }


`;
