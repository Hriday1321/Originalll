import styled from "styled-components"
import { Link } from "react-router-dom"

export const Block = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-around;
    height: 50px;
`;

export const Button = styled(Link)`
    color: #0d5878;
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
        background-color: #0d5878;
        border-radius: 5px;
    }
    &:hover ${Button}{
        color: white;
    }
`;

