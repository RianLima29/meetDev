import styled from "styled-components";
import { COLOR_ACCENT } from "../../config";

export const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 10px;
  padding-top: 40px;
`;

export const NoMatchs = styled.p`

  color: ${COLOR_ACCENT};

`

