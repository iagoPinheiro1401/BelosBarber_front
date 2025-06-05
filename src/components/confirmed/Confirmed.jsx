import styled from "styled-components";
import { CheckCircleIcon } from "@phosphor-icons/react/dist/ssr";

const Container = styled.div`
    background-color: #1E1D1D;
    border-radius: 20px;
    display: flex;
    gap: 30px;
    padding: 20px;
`

const Text = styled.h2`
    font-weight: bold;
    font-size: 32px;
    color: white;
`

export default function Confirmed() {
    return (
        <Container>
            <Text>Agendado com sucesso!</Text>
            <CheckCircleIcon size={32} color="#12d370" />
        </Container>
    )
}