import styled from "styled-components";
import { CalendarIcon } from "@phosphor-icons/react/dist/ssr";

const Container = styled.div`
    width: 70%;
    height: 90px;
    padding: 0 20px;
    background-color: #404040;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 15px;
`

const ServiceAndTime = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`

const Client = styled.h2`
    font-size: 25px;
    font-weight: bold;
    color: #949494;
`

const P = styled.p`
    color: #949494;
    font-size: 15px;
    font-weight: lighter;
`

const Price = styled.h3`
  font-size: 25px;
  font-weight: bold;
  color: #949494;
  margin-left: auto;
`

export default function Horarios({ cliente, horario, servico, preco }) {
  if (!cliente || !horario) return null;

  return (
    <Container>
      <CalendarIcon size={50} weight="fill" color="#FF7000" />
      <ServiceAndTime>
        <P>{horario}</P>
        <Client>{cliente}</Client>
        <P>{servico}</P>
      </ServiceAndTime>
      <Price>R$ {preco}</Price>
    </Container>
  );
}