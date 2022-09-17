import styled from "styled-components"

export const Input = styled.input`
    border: solid #999 1px;
    border-right: none;
    width: 30%;
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

export const Inputs = styled.div`
    display: flex;
    justify-content: center;
`;

export const Button = styled.button`
    color: white;
    background-color: #7C95A1;
    border: solid #999;
    border-width: 1px;
    border-radius: 0px 5px 5px 0px;
`;

export const List = styled.div`
    background-color: white;
    color: #666;
    width: 80%;
    margin: 0 auto;
    margin-top: 1%;
    border-radius: 5px;
`;

export const Div = styled.div`
    background-color: #f8fcff;
    width: 70%;
    margin: 2% auto;
    padding: 2%2%;
    border-radius: 5px;
`;

export const Li = styled.li`
    list-style: none;
    text-align: center;
    padding: 1%1%;
    border: solid #999 1px;
    :nth-child(2n){
        background-color: #7C95A1;
        color: white;
        border-top: none;
    }
`;