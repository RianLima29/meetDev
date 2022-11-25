import React from "react";
import * as C from "./styles";
import Button from "../../components/Button";
import { BsGoogle } from "react-icons/bs";
import Logo from "../../components/Logo";
import { auth } from "../../firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { COLOR_PRIMARY_VARIANT } from "../../config";

export default function Login() {
  let [signWithGoogle] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    toast.loading("Conectando ao Google...");
    signWithGoogle().finally(() => {
      toast.dismiss();
      navigate("/");
    });
  };

  return (
    <C.Container>
      <C.LeftContainer>
        <Logo />
      </C.LeftContainer>
      <C.RightContainer>
        <Logo />
        <C.WelcomeTitle>Bem-vindo ao MeetDev,</C.WelcomeTitle>
        <C.WelcomeText>
          O melhor app de encontro para desenvolvedores, geeks e amantes da
          tecnologia.
        </C.WelcomeText>

        <Button
          onClick={signInWithGoogle}
          icon={<BsGoogle />}
          width="300px"
          text="Login com o Google"
          backgroundColor={COLOR_PRIMARY_VARIANT}
        />
      </C.RightContainer>
    </C.Container>
  );
}
