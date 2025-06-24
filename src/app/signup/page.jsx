"use client";

import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { useAuthContext } from "@/contexts/authContext";

import Input from "@/components/form/Input";
import Button from "@/components/form/Button";
import Checkbox from "@/components/form/Checkbox";
import H1 from "@/components/typography/H1";
import H3 from "@/components/typography/H3";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const CheckBoxContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  margin-left: 50px;
`;

export default function SignupPage() {
  const { register, handleSubmit, reset } = useForm();
  const [clienteSelected, isClienteSelected] = useState(false);
  const [barbeiroSelected, isBarbeiroSelected] = useState(false);
  const router = useRouter();
  const { login } = useAuthContext();

  const onSubmit = async (data) => {
    let url = "";

    if (clienteSelected) {
      url = "https://belobarberapi-production.up.railway.app/clientes";
    } else if (barbeiroSelected) {
      url = "https://belobarberapi-production.up.railway.app/profissionais";
    } else {
      alert("Por favor, selecione Cliente ou Barbeiro");
      return;
    }

    try {
      const formData = { ...data };

      await axios.post(url, formData);

      const response = await axios.post(
        "https://belobarberapi-production.up.railway.app/auth/login",
        {
          email: formData.Email,
          senha: formData.Senha,
        }
      );

      login(response.data);

      const tipo = response.data.usuario.tipo;

      if (tipo === "cliente") {
        router.push("/agendar");
      } else {
        router.push("/agenda");
      }
    } catch (error) {
      console.error("Erro ao cadastrar ou logar:", error);
      alert("Erro ao cadastrar. Tente novamente.");
    }
  };

  const handleSelectedCliente = () => {
    isClienteSelected(!clienteSelected);
    isBarbeiroSelected(false);
  };

  const handleSelectedBarbeiro = () => {
    isBarbeiroSelected(!barbeiroSelected);
    isClienteSelected(false);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <H1>Faça seu cadastro!</H1>
        <CheckBoxContainer>
          <Checkbox
            name="Cliente"
            value="sim"
            onClick={handleSelectedCliente}
            checked={clienteSelected}
          />
          <Checkbox
            name="Barbeiro"
            value="sim"
            onClick={handleSelectedBarbeiro}
            checked={barbeiroSelected}
          />
        </CheckBoxContainer>
        <Input placeholder="Nome" {...register("Nome")} />
        <Input placeholder="E-mail" {...register("Email")} />
        <Input placeholder="Telefone" {...register("Telefone")} />
        <Input
          placeholder="Senha"
          type="password"
          {...register("Senha")}
        />
        <Button type="submit">Cadastrar</Button>
        <H3 onClick={() => router.push("/login")}>
          Já é cadastrado?{" "}
          <H3 color="#FF7000" pointer>
            Faça o login
          </H3>
        </H3>
      </Form>
    </Container>
  );
}
