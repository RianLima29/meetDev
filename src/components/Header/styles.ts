import styled from "styled-components";
import { COLOR_DARK, COLOR_TEXT } from "../../config";

export const Container = styled.div`
  width: 100vw;
  height: 60px;
  padding: 10px 20px;
  max-width: 100%;
  background-color: ${COLOR_DARK};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface PhotoContainerProps {
  path: string;
}

export const PhotoContainer = styled.div<PhotoContainerProps>`
  height: 35px;
  width: 35px;
  border-radius: 10000000px;
  background-image: url(${(props) => props.path});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  position: relative;
`;

export const HeaderTitle = styled.h2`
  color: ${COLOR_TEXT};
`;
