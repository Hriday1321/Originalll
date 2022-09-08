import styled from "styled-components"
import { Link } from "react-router-dom"

export const Block = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-around;
    height: 50px;
`;

export const Button = styled(Link)`
    color: rgb(136, 156, 186);
    text-decoration: none;
    font-weight:  600;
`;

export const Span = styled.span`
    background-color: white;
    display: flex;
    flex: .15;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    &:hover{
        background-color: rgb(136, 156, 186);
        border-radius: 5px;
    }
    &:hover ${Button}{
        color: white;
    }
`;

