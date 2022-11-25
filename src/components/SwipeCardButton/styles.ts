import styled from "styled-components";

interface Props {
  backgroundColor: string;
}

export const SwipeCardButton = styled.button<Props>`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 3px solid white;
  outline: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  transition: 0.2s;
  cursor: pointer;

  & > svg {
    font-size: 50px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  }

  &:hover {
    border: 3px solid ${(props) => props.backgroundColor};
    background-color: ${(props) => props.backgroundColor};
  }
`;
