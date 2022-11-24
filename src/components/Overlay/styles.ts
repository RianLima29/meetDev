import styled from "styled-components";
import { COLOR_TEXT } from "../../config";

export const Container = styled.div`

    width: 100vw;
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 100000000000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`

export const Message = styled.h2`
    text-align: center;
    color: ${COLOR_TEXT};
`