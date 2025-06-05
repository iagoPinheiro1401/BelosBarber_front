"use client"

import styled from 'styled-components';

import BoardRelatorio from '@/components/informationBoard/relatorioComponents/BoardRelatorio';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  background: linear-gradient(to bottom, #ff9b00, #ff7000);
`;

export default function Relatorio() {
    return(
        <Container>
            <BoardRelatorio title="Relatórios"/>   
        </Container>
    )
}