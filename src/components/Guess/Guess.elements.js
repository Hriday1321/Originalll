import styled, { keyframes } from 'styled-components'

export const Cont = styled.div`
    display: flex;
    padding: 0.5% 0 0.5% 0;
    background-color: #8CA5B1;
    width: 40%;
    height: 80px;
    margin: 0 auto;
    justify-content: center;
`;

export const Letter = styled.span`
    border: solid white 2px;
    border-radius: 5px;
    color: white;
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    font-weight: 600;
    margin: 1%;
    text-transform: uppercase;
`;

const colorChange = keyframes`
    0% {border: solid white 2px;
        color: white;
        background-color: inherit;}
    100% {background-color: white;
        border: solid white 2px;
        color: #7C95A1;}
`;

export const LetterF = styled.span`
    background-color: white;
    border: solid white 2px;
    color: #7C95A1;
    border-radius: 5px;
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    font-weight: 600;
    margin: 1%;
    text-transform: uppercase;
    animation-name: ${colorChange};
    animation-duration: 3s;
    animation-iteration-count: 1;
`;

export const LetterG = styled.span`
    background-color: rgb(113, 171, 108);
    border: solid white 2px;
    border-radius: 5px;
    color: white;
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    font-weight: 600;
    margin: 1%;
    text-transform: uppercase;
`;

export const LetterY = styled.span`
    background-color: rgb(211, 189, 89);
    border: solid white 2px;
    border-radius: 5px;
    color: white;
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    font-weight: 600;
    margin: 1%;
    text-transform: uppercase;
`;

export const Div = styled.div`
    margin: 1% 0;
    padding: 1% 0;
`;