import styled from "styled-components"

export const Input = styled.input`
    border: solid #999 1px;
    border-right: none;
    text-transform: uppercase;
    background-color: white;
    flex: 0.4;
    color: rgb(18,19,19);
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
    width: 50%;
    margin: 0 auto;
    margin-top: 5%;
`;

export const Inputs2 = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    margin: 1% auto;
`;

export const Button = styled.button`
    color: rgb(18,19,19);
    /* background-color: #7C95A1; */
    background-color: rgb(218,235,255);
    flex: 0.2;
    padding: 1%;
    border: solid #999 1px;
    border-radius: 0px 2px 2px 0px;
`;

export const Code = styled.span`
    background-color: rgb(218,235,255);
    color: rgb(18,19,19);
    padding: 1%;
    flex: 0.6;
`