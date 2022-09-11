import styled from "styled-components"
import { Link } from "react-router-dom"

export const Block = styled.div`
    background-color: #666;
    display: flex;
    justify-content: space-around;
    height: 50px;
`;

export const Button = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight:  600;
`;

export const Span = styled.span`
    background-color: #666;
    display: flex;
    flex: .15;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    &:hover{
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

