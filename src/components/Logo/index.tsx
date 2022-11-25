import React from "react";
import * as C from "./styles";
import { useNavigate } from "react-router-dom";

interface Props {
  redirectTo?: string;
}

export default function Logo(props: Props) {
  const navigate = useNavigate();
  const style: React.CSSProperties = {
    cursor: props.redirectTo ? "pointer" : "default",
  };

  const redirect = () => {
    if (props.redirectTo) {
      navigate(props.redirectTo);
    }
  };

  return <C.Logo onClick={redirect} style={style} />;
}
