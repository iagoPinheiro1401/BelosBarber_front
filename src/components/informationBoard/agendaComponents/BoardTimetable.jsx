"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Horarios from "./Horarios";
import Input from "@/components/form/Input";
import Menu from "../Menu";

import { useAuthContext } from "@/contexts/AuthContext";

const Container = styled.div`
  width: 40%;
  height: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 20px;
  background-color: #1E1D1D;
  border-radius: 20px;
  gap: 20px;
`

const Title = styled.h2`
  font-size: 27px;
  font-weight: bold;
  color: #E0E0E0;
`

const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 50px;
  flex-grow: 1;
`

export default function BoardTimetable({ title }) {
  const [dataSelecionada, setDataSelecionada] = useState("");
  const [horarios, setHorarios] = useState([]);

  const { usuario, token } = useAuthContext();
  const idProfissional = usuario?.ID_Profissional;

  useEffect(() => {
  async function buscarAgendamentos() {
    if (!dataSelecionada || !idProfissional) {
      setHorarios([]);
      return;
    }

    try {
      const response = await axios.get("https://belobarberapi-production.up.railway.app/agendados", {
        params: { data: dataSelecionada, idProfissional },
        headers: { Authorization: `Bearer ${token}` },
      });

      const dados = Array.isArray(response.data) ? response.data : [];
      setHorarios(dados);
    } catch (error) {
      console.error("Erro ao buscar agendamentos:", error);
      setHorarios([]);
    }
  }

  buscarAgendamentos();
}, [dataSelecionada, idProfissional, token]);


  return (
    <Container>
      <Title>{title}</Title>
      <Input
        type="date"
        value={dataSelecionada}
        onChange={(e) => setDataSelecionada(e.target.value)}
      />

    <ServicesContainer>
    {horarios.length > 0 ? (
        horarios.map(({ Cliente, Hora, Servicos, Preco }, index) => (
        <Horarios
            key={index}
            cliente={Cliente}
            horario={Hora}
            servico={Servicos}
            preco={Preco}
        />
        ))
    ) : (
        <p style={{ color: "#949494" }}>Nenhum agendamento para esta data.</p>
    )}
    </ServicesContainer>


      <Menu page={title} />
    </Container>
  );
}