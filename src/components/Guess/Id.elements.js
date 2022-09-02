import styled from "styled-components"

export const Input = styled.input`
    border: none;
    background-color: white;
    color: #1280b0;
    outline: none;
    box-sizing: border-box;
    border-radius: 5px 0px 0px 5px;
    padding: 1%;
    font-weight: 500;
    ::placeholder {
    color: #1280b0;
    }
`;

export const Inputs = styled.div`
    display: flex;
    justify-content: center;
    margin: 1%;
`;

export const Button = styled.button`
    color: white;
    background-color: #1280b0;
    border: none;
    border-radius: 0px 5px 5px 0px;
`;
