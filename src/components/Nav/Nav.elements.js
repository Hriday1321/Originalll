import styled from "styled-components"
import { Link } from "react-router-dom"

export const Block = styled.div`
    background-color: #0d5878;
    display: flex;
    justify-content: space-around;
    height: 50px;
`;

export const Button = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight:  500;
`;

export const Span = styled.span`
    background-color: #0d5878;
    display: flex;
    flex: .15;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    &:hover{
        background-color: white;
    }
    &:hover ${Button}{
        color: #0d5878;
    }
`;

