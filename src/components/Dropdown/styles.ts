import styled from "styled-components";
import { COLOR_ACCENT, COLOR_DARK } from "../../config";

interface DropdownProps {
    position:
      | "top-center"
      | "top-left"
      | "top-right"
      | "bottom-center"
      | "bottom-left"
      | "bottom-right";
    parentSize: {
      height: string;
      width: string;
    };
  }
  
  export const Dropdown = styled.div<DropdownProps>`

    min-width: 100px;
    min-height: 30px;
    width: fit-content;
    height: fit-content;
    position: absolute;
    background-color: ${COLOR_DARK};
    border: 1px solid ${COLOR_ACCENT};
    border-radius: 5px;
    padding: 5px 10px;
    cursor: default;
  
    ${(props) => {
      switch (props.position) {
        case "top-center":
          return {
              bottom: "100%",
            left: "-50%",
          };
          break;
        case "top-left":
          return {
              bottom: "100%",
            right: parseFloat(props.parentSize.width) / 2,
          };
          break;
        case "top-right":
          return {
            bottom: "100%",
            left: parseFloat(props.parentSize.width) / 2,
          };
          break;
        case "bottom-center":
          return {
              top: "100%",
            left: "-50%",
          };
          break;
        case "bottom-left":
          return {
            top: "100%",
            right: parseFloat(props.parentSize.width) / 2,
          };
          break;
        case "bottom-right":
          return {
              top: "100%",
            left: parseFloat(props.parentSize.width) / 2,
          };
          break;
  
        default:
          return {};
          break;
      }
    }}
  `;