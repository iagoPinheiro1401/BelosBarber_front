import styled from "styled-components";

import { CalendarIcon } from "@phosphor-icons/react/dist/ssr";
import { ScissorsIcon } from "@phosphor-icons/react/dist/ssr";
import { ChartLineIcon } from "@phosphor-icons/react/dist/ssr";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
`

export default function Menu({ page }) {
    return(
        <Container>
            <ScissorsIcon size={50} color={page === "Serviços" ? "#FF7000" : "#949494"} weight="fill" />
            <CalendarIcon size={50} color={page === "Agenda" ? "#FF7000" : "#949494"} weight="fill"  />
            <ChartLineIcon size={50} color={page === "Relatórios" ? "#FF7000" : "#949494"} weight="fill"  />
        </Container>
    )
}