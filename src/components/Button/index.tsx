import React from "react";
import * as C from "./styles";

interface Props {
  noBackgroundColor?: boolean;
  icon?: JSX.Element;
  text?: string;
  radius?: string;
  height?: string;
  width?: string;
  backgroundColor?: string;
  color?: string;
  onClick?: () => any;
}

export default function Button(props: Props) {
  return (
    <C.Button {...props}>
      {props.icon}
      <p>{props.text}</p>
    </C.Button>
  );
}
