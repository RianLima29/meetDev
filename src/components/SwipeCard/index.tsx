import React from "react";
import SwipeCardButton from "../SwipeCardButton";
import * as C from "./styles";
import { BiX } from "react-icons/bi";
import { BiCheck } from "react-icons/bi";
import { COLOR_ACCENT, COLOR_ERROR } from "../../config";

interface Props {
  name: string;
  distance: number;
  age: number;
  photoUrl: string;
  isOnline: boolean;
  zIndex: number;
  onAccept: () => any;
  onReject: () => any;
}

export default function SwipeCard(props: Props) {
  const [isVisible, setIsVisible] = React.useState<boolean>(true);

  const onRejected = async () => {
    await props.onReject();
    setIsVisible(false);
  };
  const onAccepted = async () => {
    await props.onAccept();
    setIsVisible(false);
  };

  if (isVisible) {
    return (
      <C.Container zIndex={props.zIndex} photoUrl={props.photoUrl}>
        <C.UserInfoContainer>
          <C.RightSide>
            <C.Name>{props.name}</C.Name>
            <C.Status isOnline={props.isOnline} />
          </C.RightSide>
          <C.LeftSide>
            <C.Age>{props.age} anos</C.Age>
            <C.Distance>{props.distance}Km</C.Distance>
          </C.LeftSide>
        </C.UserInfoContainer>
        <C.ControlContainer>
          <SwipeCardButton
            icon={<BiX />}
            onClick={onRejected}
            backgroundColor={COLOR_ERROR}
          />
          <SwipeCardButton
            icon={<BiCheck />}
            onClick={onAccepted}
            backgroundColor={COLOR_ACCENT}
          />
        </C.ControlContainer>
      </C.Container>
    );
  } else {
    return null;
  }
}
