import React from "react";
import * as C from "./styles";

interface Props {
  onClick?: () => any;
  children: JSX.Element | JSX.Element[] | string;
}

export default function DropdownItem(props: Props) {
  return (
    <C.DropdownItem onClick={props.onClick}>
      <p>{props.children}</p>
    </C.DropdownItem>
  );
}
