// style
import styled from "styled-components";

export const ErrorWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 15px;
    background: lemonchiffon;    
    border-top: 1px solid black;

`;

export const MessageWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: black;
    color: var(--color-main-yellow);
    font-family: var(--font-main);
    font-size: 24px;
    font-weight: bold;
    padding: 5px;

`;
