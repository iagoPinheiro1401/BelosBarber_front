"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import ServiceCard from "./ServiceCard";
import Menu from "../Menu";
import { PlusCircleIcon } from "@phosphor-icons/react/dist/ssr";

const Container = styled.div`
  width: 40%;
  height: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 20px;
  background-color: #1e1d1d;
  border-radius: 20px;
  gap: 20px;
`;

const Title = styled.h2`
  font-size: 27px;
  font-weight: bold;
  color: #e0e0e0;
`;

const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 50px;
  flex-grow: 1;
`;

const PlusIconContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  padding-right: 100px;
`;

const StyledPlusIcon = styled(PlusCircleIcon)`
  cursor: pointer;
`

export default function BoardService({ title }) {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const response = await axios.get("https://belobarberapi-production.up.railway.app/servicos");
        setServicos(response.data);
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      }
    };

    fetchServicos();
  }, []);

  return (
    <Container>
      <Title>{title}</Title>
      <ServicesContainer>
        {servicos.map((servico) => (
          <ServiceCard
            key={servico.ID_Servico}
            servico={servico.Nome}
            preco={`R$ ${parseFloat(servico.Preco).toFixed(2)}`}
          />
        ))}
      </ServicesContainer>
      <PlusIconContainer>
        <StyledPlusIcon size={50} color="#FF7000" weight="fill" />
      </PlusIconContainer>
      <Menu page={title} />
    </Container>
  );
}
