import styled from "styled-components"

export const Input = styled.input`
    border: none;
    text-transform: uppercase;
    background-color: white;
    color: #666;
    outline: none;
    box-sizing: border-box;
    border-radius: 5px 0px 0px 5px;
    padding: 1%;
    font-weight: 500;
    ::placeholder {
    color: #666;
    }
`;

export const Div = styled.div`
    background-color: #7C95A1;
    width: 50%;
    margin: 2% auto;
    padding: 2%2%;
    border-radius: 5px;
`;

export const Inputs = styled.div`
    display: flex;
    justify-content: center;
    margin: 1%;
`;

export const Button = styled.button`
    color: white;
    background-color: #666;
    border: none;
    border-radius: 0px 5px 5px 0px;
`;

export const Code = styled.span`
    background-color: #666;
    color: white;
    padding: 1%;
    border-radius: 5px;
`