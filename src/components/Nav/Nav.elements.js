import styled from "styled-components"
import { Link } from "react-router-dom"

export const Block = styled.div`
    /* background-color: #7CA19B; */
    background-color: rgb(18,19,19);
    display: flex;
    justify-content: space-around;
    height: 50px;
    flex: 0.5;
`;

export const Button = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight:  700;
    font-size: 1rem;
    &:hover{
        color: rgb(18,19,19);
    }
`;

export const Span = styled.span`
    /* background-color: #7CA19B; */
    background-color: rgb(18,19,19);
    display: flex;
    flex: .15;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    &:hover{
        background-color: white;
    }
`;

