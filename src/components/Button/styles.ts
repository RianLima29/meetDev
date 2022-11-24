import styled from "styled-components";
import { COLOR_PRIMARY_VARIANT, COLOR_TEXT } from "../../config";

interface PropsButton {
  width?: string;
  height?: string;
  radius?: string | number;
  backgroundColor?: string;
  noBackgroundColor?: boolean;
  color?: string;
  icon?: JSX.Element;
}

export const Button = styled.button<PropsButton>`
  padding: 10px 20px;
  display: flex;
  outline: none;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width ?? "60%"};
  margin: 20px auto;
  height: ${(props) => props.height ?? "50px"};
  border-radius: ${(props) => props.radius ?? "20px"};
  background-color: ${(props) => props.noBackgroundColor ? 'transparent' : props.backgroundColor ?? COLOR_PRIMARY_VARIANT};
  color: ${(props) => props.color ?? COLOR_TEXT};
  border: 2px solid ${props => props.backgroundColor};
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.color ?? "transparent"};
    color: ${(props) => props.backgroundColor ?? COLOR_TEXT};
    border: 2px solid ${props => props.backgroundColor};
  }

  & p {
    margin-left: 10px;
  }

  & svg {
    font-size: 20px;
  }
`;
