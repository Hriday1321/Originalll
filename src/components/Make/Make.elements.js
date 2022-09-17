import styled from "styled-components"

export const Input = styled.input`
    border: solid #999 1px;
    border-right: none;
    text-transform: uppercase;
    background-color: white;
    color: #666;
    outline: none;
    box-sizing: border-box;
    border-radius: 2px 0px 0px 2px;
    padding: 1%;
    font-weight: 500;
    ::placeholder {
    color: #666;
    }
`;

export const Inputs = styled.div`
    display: flex;
    justify-content: center;
    margin: 1%;
`;

export const Button = styled.button`
    color: white;
    background-color: #7C95A1;
    border: solid #999 1px;
    border-radius: 0px 2px 2px 0px;
`;

export const Code = styled.span`
    background-color: #7C95A1;
    color: white;
    padding: 1%;
`