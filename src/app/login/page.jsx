"use client";

import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/contexts/AuthContext";

import Input from "@/components/form/Input";
import H1 from "@/components/typography/H1";
import H3 from "@/components/typography/H3";
import Button from "@/components/form/Button";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const StyleH1 = styled(H1)`
  margin-right: 170px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
`;

const StyledInput = styled(Input)`
  width: 300px;
`;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const router = useRouter();
  const { login } = useAuthContext();

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("https://belobarberapi-production.up.railway.app/auth/login", {
      email,
      senha,
    });

    login(response.data);

    const tipo = response.data.usuario.tipo;

    if (tipo === "cliente") {
      router.push("/agendar");
    } else {
      router.push("/");
    }
  } catch (error) {
    console.error("Erro no login:", error);
    setErro("Email ou senha inválidos");
  }
};


  return (
    <Container>
      <img src="/logo.png" alt="Logo" />
      <Form onSubmit={handleSubmit}>
        <StyleH1>Faça Login!</StyleH1>
        <StyledInput
          type="email"
          placeholder="Usuário"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledInput
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {erro && <H3 color="red">{erro}</H3>}
        <TextContainer>
          <H3>Ainda não é cadastrado?</H3>
          <H3 color="#FF7000">Cadastre-se</H3>
        </TextContainer>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
}
