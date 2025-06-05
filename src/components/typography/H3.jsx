import styled from "styled-components";

const StyledH3 = styled.h3`
    font-size: 20px;
    font-weight: bolder;
    color: ${({ color }) => color || `#949494`};
`

export default function H3({ children, color }) {
    return(
        <StyledH3 color={color}>{children}</StyledH3>
    )
}