import styled from "styled-components";

const StyledH3 = styled.h3`
    font-size: 20px;
    font-weight: bolder;
    color: ${({ color }) => color || `#949494`};
    cursor: ${({ pointer }) => (pointer ? 'pointer' : 'default')};
`

export default function H3({ children, color, onClick, pointer }) {
    return(
        <StyledH3 color={color} onClick={onClick} pointer={pointer}>{children}</StyledH3>
    )
}