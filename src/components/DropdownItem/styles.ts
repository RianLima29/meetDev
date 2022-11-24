import styled from "styled-components";
import { COLOR_ACCENT, COLOR_BG, COLOR_PRIMARY, COLOR_PRIMARY_VARIANT, COLOR_TEXT } from "../../config";

export const DropdownItem = styled.div`
  width: 150px;
  height: 30px;
  color: ${COLOR_TEXT};
  border-bottom: 1px solid ${COLOR_TEXT};
  align-items: center;
  display: flex;
  transition: 0.5s;
  cursor: pointer;
  margin: 5px 0 5px 0;

  &:hover {
    background-color: ${COLOR_BG};
    border-bottom: 1px solid ${COLOR_ACCENT};
  }
`;
