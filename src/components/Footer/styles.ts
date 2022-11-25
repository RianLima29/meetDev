import styled from "styled-components";
import { COLOR_ACCENT, COLOR_BG, COLOR_DARK, COLOR_TEXT } from "../../config";
import { CgCardHearts } from "react-icons/cg";
import { BsChatLeftDots } from "react-icons/bs";

export const Container = styled.div`
  background-color: ${COLOR_DARK};
  width: 100vw;
  max-width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000000000000000000000;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
`;

export const CardsButton = styled(CgCardHearts)`
  color: ${COLOR_TEXT};
  font-size: 35px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    color: ${COLOR_ACCENT};
  }
`;

export const ChatButton = styled(BsChatLeftDots)`
  color: ${COLOR_TEXT};
  font-size: 35px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    color: ${COLOR_ACCENT};
  }
`;
