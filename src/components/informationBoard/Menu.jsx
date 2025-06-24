import styled from "styled-components";
import { useRouter } from "next/navigation";

import { CalendarIcon } from "@phosphor-icons/react/dist/ssr";
import { ScissorsIcon } from "@phosphor-icons/react/dist/ssr";
import { ChartLineIcon } from "@phosphor-icons/react/dist/ssr";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const StyledScissorsIcon = styled(ScissorsIcon)`
  cursor: pointer;
`;

const StyledCalendarIcon = styled(CalendarIcon)`
  cursor: pointer;
`;

const StyledChartLineIcon = styled(ChartLineIcon)`
  cursor: pointer;
`;

export default function Menu({ page }) {
  const router = useRouter();

  return (
    <Container>
      <StyledScissorsIcon
        size={40}
        color={page === "Serviços" ? "#FF7000" : "#949494"}
        weight="fill"
        onClick={() => router.push("/servicos")}
      />
      <StyledCalendarIcon
        size={40}
        color={page === "Agenda" ? "#FF7000" : "#949494"}
        weight="fill"
        onClick={() => router.push("/agenda")}
      />
      <StyledChartLineIcon
        size={40}
        color={page === "Relatórios" ? "#FF7000" : "#949494"}
        weight="fill"
        onClick={() => router.push("/relatorio")}
      />
    </Container>
  );
}
