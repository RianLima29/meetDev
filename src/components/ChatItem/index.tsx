import React from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";

interface Props {
  photoUrl: string;
  profileName: string;
  age: number;
  redirectTo: string;
}

export default function ChatItem(props: Props) {
  const navigate = useNavigate();
  return (
    <C.Container onClick={() => navigate(props.redirectTo)}>
      <C.ProfilePic photoUrl={props.photoUrl} />
      <C.userInfoWrapper>
        <C.ProfileName>{props.profileName}</C.ProfileName>
        <C.ProfileAge>{props.age} anos</C.ProfileAge>
      </C.userInfoWrapper>
    </C.Container>
  );
}
