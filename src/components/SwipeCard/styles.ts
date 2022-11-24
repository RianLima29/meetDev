import styled from "styled-components";
import {
  COLOR_ACCENT,
  COLOR_DARK,
  COLOR_TEXT,
  MOBILE_WIDTH,
} from "../../config";

interface ContainerProps {
  photoUrl: string;
  zIndex: number;
}

export const Container = styled.div<ContainerProps>`
  justify-self: start;
  background-color: ${COLOR_DARK};
  z-index: ${(props) => props.zIndex};
  width: 80vw;
  max-width: 350px;
  min-width: 350px;
  height: 80vh;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  align-items: center;
  background-image: url(${(props) => props.photoUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: ${MOBILE_WIDTH}) {
    height: 60vh;
  }
`;

export const UserInfoContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  padding: 30px 20px;
  align-items: center;
  justify-content: space-between;
`;

export const Distance = styled.p`
  color: ${COLOR_TEXT};
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  font-weight: 400;
`;

export const Name = styled.h3`
  color: ${COLOR_TEXT};
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  font-weight: 400;
`;

export const Age = styled.h3`
  color: ${COLOR_TEXT};
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  font-weight: 400;
`;

export const RightSide = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
`;

export const LeftSide = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  flex-direction: column;
`;

export const ControlContainer = styled.div`
  margin-bottom: 10px;
  width: 50%;
  height: fit-content;
  display: flex;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

interface StatusProps {
  isOnline: boolean;
}

export const Status = styled.div<StatusProps>`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.isOnline ? COLOR_ACCENT : "#ccc")};
  border-radius: 5px;
  margin-left: 2px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
`;
