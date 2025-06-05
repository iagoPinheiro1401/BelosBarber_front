import styled from "styled-components";

const StyledInput = styled.input`
    width: 409px;
    height: 60px;
    padding: 0 50px;
    background-color: #404040;
    border-radius: 50px;
    border: none;
    color: white;
    font-size: 20px;

    &::placeholder {
        font-weight: bolder;
        font-size: 20px;
    }
`

export default function Input(props) {
    return(
        <StyledInput {...props}/>
    )
}