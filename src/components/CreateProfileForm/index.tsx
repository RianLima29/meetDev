import React from "react";
import * as C from "./styles";
import { useForm } from "react-hook-form";
import { UserProfile } from "firebase/auth";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import * as yup from "yup";
import Button from "../Button";
import { COLOR_ACCENT } from "../../config";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserProfile, userProfile } from "../../firebase/services/userProfile";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  name: yup
    .string()
    .typeError("O valor é inválido")
    .required("O campo tem que ser preenchido")
    .min(2, "O mínimo são 2 caracteres")
    .max(40, "O máximo são 40 caracteres"),
  age: yup
    .number()
    .typeError("O valor precisa ser um número")
    .required("O campo tem que ser preenchido")
    .min(18, "Você precisa ter pelo menos 18 anos")
    .max(100, "O máximo são 100 anos"),
  userGender: yup
    .string()
    .typeError("O valor é inválido")
    .required("O campo tem que ser preenchido"),
  preferenceGender: yup
    .string()
    .typeError("O valor é inválido")
    .required("O campo tem que ser preenchido"),
});

export default function CreateProfileForm() {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserProfile>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IUserProfile) => {
    userProfile.setProfile(
      user.user?.uid,
      data,
      user.user?.photoURL ?? undefined
    );
    localStorage.removeItem("preferenceGender");
    localStorage.setItem("preferenceGender", data.preferenceGender);
    navigate("/");
  };
  const onError = () => {
    toast.error("Resolva os erros nos campos antes de enviar!");
  };
  return (
    <C.Container>
      <C.Title>Configure seu perfil</C.Title>
      <C.Form onSubmit={handleSubmit(onSubmit, onError)}>
        <C.Input {...register("name")} placeholder="Seu nome"></C.Input>
        {errors.name && <C.errorLabel>{errors.name.message}</C.errorLabel>}
        <C.Input
          {...register("age")}
          type="tel"
          placeholder="Sua idade"
        ></C.Input>
        {errors.age && <C.errorLabel>{errors.age.message}</C.errorLabel>}
        <C.Select {...register("userGender")} placeholder="Seu gênero">
          <C.Option selected disabled value="">
            Seu gênero
          </C.Option>
          <C.Option value="M">Masculino</C.Option>
          <C.Option value="F">Feminino</C.Option>
        </C.Select>
        {errors.userGender && (
          <C.errorLabel>{errors.userGender.message}</C.errorLabel>
        )}
        <C.Select {...register("preferenceGender")} placeholder="À procura de">
          <C.Option selected disabled value="">
            Procura por
          </C.Option>
          <C.Option value="M">Homem</C.Option>
          <C.Option value="F">Mulher</C.Option>
          <C.Option value="MF">Ambos</C.Option>
        </C.Select>
        {errors.preferenceGender && (
          <C.errorLabel>{errors.preferenceGender.message}</C.errorLabel>
        )}
        <Button
          noBackgroundColor={true}
          backgroundColor={COLOR_ACCENT}
          text="Enviar"
        />
      </C.Form>
    </C.Container>
  );
}
