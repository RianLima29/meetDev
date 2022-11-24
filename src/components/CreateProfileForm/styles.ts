import styled from "styled-components";
import { COLOR_ACCENT, COLOR_BG, COLOR_ERROR, COLOR_PRIMARY, COLOR_TEXT } from "../../config";

export const Title = styled.h3`

    color: ${COLOR_TEXT};

`

export const Container = styled.div`
  width: 40vw;
  min-width: 300px;
  padding: 10px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
`;
export const Input = styled.input`
  width: 100%;
  background-color: ${COLOR_BG};
  outline: none;
  border: none;
  border-bottom: 1px solid ${COLOR_ACCENT};
  padding: 5px;
  color: ${COLOR_TEXT};
    margin: 10px 0 10px 0;
 

  &:focus{
    border-bottom: 2px solid ${COLOR_ACCENT};
  }
`;
export const Select = styled.select`
  width: 100%;
  background-color: transparent;
  border: none;
  color: ${COLOR_TEXT};
  margin: 10px 0 10px 0;
  outline: none;
  height: 50px;
  border-bottom: 1px solid ${COLOR_ACCENT};
  border: 1px solid ${COLOR_ACCENT};
  padding: 5px;
  border-radius: 5px;
`;

export const Option = styled.option`
  background-color: red;
  height: 30px;
  background-color: ${COLOR_BG};
  width: 100%;
  outline: none;
  border: 1px solid red;
`;

export const errorLabel = styled.p`
    color: ${COLOR_ERROR};
    font-size: 12px;
`
