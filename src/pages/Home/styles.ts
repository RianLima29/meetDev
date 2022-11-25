import styled from "styled-components";
import { COLOR_ACCENT, COLOR_TEXT, MOBILE_WIDTH } from "../../config";
import { Link } from "react-router-dom";

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

export const Text = styled.p`
  color: ${COLOR_TEXT};
  margin: 0.5em;
  text-align: center;
`;

export const LinkTo = styled(Link)`
  border-bottom: 1px solid ${COLOR_ACCENT};
  text-decoration: none;
  color: ${COLOR_TEXT};
  transition: .5s;

  &:hover{
    color: ${COLOR_ACCENT};
  }
`;

export const MainContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const SwipeCardContainer = styled.div`
  text-align: center;
  width: fit-content;
  max-width: 350px;
  min-width: 350px;
  height: 80vh;
  position: relative;
  @media (max-width: ${MOBILE_WIDTH}) {
    height: 60vh;
  }
`;
