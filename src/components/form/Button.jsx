import styled from "styled-components";

const StyledButton = styled.button`
    width: 184px;
    height: 60px;
    background-color: #FF7000;
    color: black;
    cursor: pointer;
    border-radius: 50px;
    font-size: 20px;
    font-weight: bolder;
`

export default function Button ({ children }) {
    return(
        <StyledButton>{children}</StyledButton>
    )
}