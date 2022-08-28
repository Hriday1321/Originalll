import styled from "styled-components"
import { Link } from "react-router-dom"

export const Block = styled.div`
    background-color: red;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
`;

export const Button = styled(Link)`
    color: red;
    background-color: white;
    padding: 5px;
    border-radius: 5px;
    text-decoration: none;
    font-weight:  500;
`;