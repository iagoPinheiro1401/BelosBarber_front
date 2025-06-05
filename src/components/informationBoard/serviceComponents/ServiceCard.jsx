import styled from "styled-components";
import { ScissorsIcon } from "@phosphor-icons/react/dist/ssr";

const Container = styled.div`
  width: 70%;
  height: 90px;
  padding: 0 20px;
  background-color: #404040;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Text = styled.h3`
  font-size: 25px;
  font-weight: bold;
  color: #949494;
  margin-left: auto;
`;

const IconAndService = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
`;

export default function ServiceCard({ servico, preco }) {
  return (
    <Container>
      <IconAndService>
        <ScissorsIcon size={50} weight="fill" color="#FF7000" />
        <Text>{servico}</Text>
      </IconAndService>
      <Text>{preco}</Text>
    </Container>
  );
}
