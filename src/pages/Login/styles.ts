import styled from "styled-components";
import { COLOR_ACCENT, COLOR_TEXT, MOBILE_WIDTH } from "../../config";

export const WelcomeTitle = styled.h1`
  color: ${COLOR_ACCENT};

  @media (max-width: ${MOBILE_WIDTH}) {
    margin-top: 30px;
  }
`;

export const WelcomeText = styled.p`
  color: ${COLOR_TEXT};
  font-weight: 200;
  margin-bottom: 30px;
`;
export const RightContainer = styled.div`
  width: 50%;
  max-width: 400px;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  & > svg {
    display: none;
  }

  @media (max-width: ${MOBILE_WIDTH}) {
    align-items: center;
    text-align: center;
    & > svg {
      display: block;
    }
  }
`;

export const LeftContainer = styled.div`
  width: 20%;
  min-width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  & > svg {
    font-size: 150px;
  }

  @media (max-width: ${MOBILE_WIDTH}) {
    display: none;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Credits = styled.p`
    color: ${COLOR_TEXT};
    position: fixed;
    bottom: 5px;
    left: 50%;
    transform: translate(-50%);
    font-size: 11px;
    font-weight: 200;
`
