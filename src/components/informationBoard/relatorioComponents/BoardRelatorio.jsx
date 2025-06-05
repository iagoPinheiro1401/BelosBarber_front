"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Menu from "../Menu";
import H3 from "@/components/typography/H3";
import Select from "@/components/form/Select";
import Button from "@/components/form/Button";

import { useAuthContext } from "@/contexts/AuthContext";

const Container = styled.div`
  width: 40%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  gap: 20px;
  padding: 20px 30px;
`;

const Form = styled.form`
  display: flex;
  gap: 20px;
`;

const RelatorioContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #404040;
  width: 70%;
  padding: 20px 20px 150px 20px;
  border-radius: 10px;
  gap: 20px;
`;

const InfoRelatorio = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Data = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e1d1d;
  padding: 10px 0;
  width: 130px;
  font-size: 20px;
  border-radius: 10px;
  color: #949494;
`;

const ServicesRequest = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export default function BoardRelatorio({ title }) {
  const [periodo, setPeriodo] = useState("mensal");
  const [dados, setDados] = useState([]);
  const [faturamentoTotal, setFaturamentoTotal] = useState(0);
  const [agendamentosTotais, setAgendamentosTotais] = useState(0);

  const { token } = useAuthContext();

  useEffect(() => {
    async function fetchRelatorio() {
      try {
        const response = await axios.get(`https://belobarberapi-production.up.railway.app/relatorio?periodo=${periodo}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const dadosAPI = response.data;

        const totalFaturamento = dadosAPI.reduce(
          (acc, item) => acc + parseFloat(item.faturamento),
          0
        );

        const totalAgendamentos = dadosAPI.reduce(
          (acc, item) => acc + item.totalAgendamentos,
          0
        );

        setDados(dadosAPI);
        setFaturamentoTotal(totalFaturamento.toFixed(2));
        setAgendamentosTotais(totalAgendamentos);
      } catch (error) {
        console.error("Erro ao buscar relatório:", error);
        setDados([]);
        setFaturamentoTotal(0);
        setAgendamentosTotais(0);
      }
    }

    if (token) fetchRelatorio();
  }, [periodo, token]);

  const handlePeriodoChange = (e) => {
    setPeriodo(e.target.value);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <H3>Escolha a frequência do relatório!</H3>
        <Form>
          <Select value={periodo} onChange={handlePeriodoChange}>
            <option value="mensal">Mensal</option>
            <option value="semanal">Semanal</option>
          </Select>
          <Button type="button">Gerar</Button>
        </Form>
        <RelatorioContainer>
          <InfoRelatorio>
            <H3>Faturamento Total</H3>
            <Data>R$ {faturamentoTotal}</Data>
          </InfoRelatorio>
          <InfoRelatorio>
            <H3>Total de Agendamentos</H3>
            <Data>{agendamentosTotais}</Data>
          </InfoRelatorio>
          <H3>Quantidade de serviços requisitados!</H3>
          <ServicesRequest>
            {dados.map(({ servico, quantidadeServico }, index) => (
              <Data key={index}>
                {servico} ({quantidadeServico})
              </Data>
            ))}
          </ServicesRequest>
        </RelatorioContainer>
      </Content>
      <Menu page={title} />
    </Container>
  );
}
