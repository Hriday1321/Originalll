import styled from "styled-components"

export const Input = styled.input`
    border: none;
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

export const List = styled.div`
    background-color: rgba(0, 0, 0, 0.05);
    color: #606e71;
    width: 50%;
    margin: 0 auto;
    border-radius: 5px;
`;

export const Li = styled.li`
    list-style: none;
    text-align: center;
    padding: 1%1%;
    :nth-child(2n){
        background-color: #606e71;
        color: white;
        
    }
`;