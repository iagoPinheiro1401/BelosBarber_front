import styled from "styled-components";

const StyledSelect = styled.select`
  width: 409px;
  height: 60px;
  padding: 0 50px;
  background-color: #404040;
  border-radius: 50px;
  border: none;
  color: white;
  font-size: 20px;
  appearance: none; /* remove o estilo padrão da setinha do select */
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;

  option {
    background-color: #404040; /* para o dropdown também ficar no tom escuro */
    color: white;
    font-size: 20px;
  }
`;

export default function Select(props) {
  return <StyledSelect {...props} />;
}
