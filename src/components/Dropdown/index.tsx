import React from "react";
import * as C from "./styles";

export interface Props {
  position:
    | "top-center"
    | "top-left"
    | "top-right"
    | "bottom-center"
    | "bottom-left"
    | "bottom-right";
  parentSize: {
    height: string;
    width: string;
  };
  children: JSX.Element | JSX.Element[];
}

export default function Dropdown(props: Props) {
  return (
    <C.Dropdown parentSize={props.parentSize} position={props.position}>
      {props.children}
    </C.Dropdown>
  );
}
