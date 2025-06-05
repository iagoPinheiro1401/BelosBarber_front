"use client"
import styled from "styled-components";

import BoardService from "@/components/informationBoard/serviceComponents/BoardService";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  background: linear-gradient(to bottom, #FF9B00, #FF7000);
`

export default function Servicos() {
    return(
        <Container>
            <BoardService title="Serviços"/>
        </Container>
    )
}