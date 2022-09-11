import styled from "styled-components"

export const Input = styled.input`
    border: none;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.05);
    color: #606e71;
    outline: none;
    box-sizing: border-box;
    border-radius: 5px 0px 0px 5px;
    padding: 1%;
    font-weight: 500;
    ::placeholder {
    color: #606e71;
    }
`;

export const Inputs = styled.div`
    display: flex;
    justify-content: center;
    margin: 1%;
`;

export const Button = styled.button`
    color: white;
    background-color: #606e71;
    border: none;
    border-radius: 0px 5px 5px 0px;
`;

export const Code = styled.span`
    background-color: #606e71;
    color: white;
    padding: 1%;
    border-radius: 5px;
`