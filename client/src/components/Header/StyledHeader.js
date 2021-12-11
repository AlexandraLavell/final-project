// style
import styled from "styled-components";

export const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 2%;
    height: 100px;
    width: 100%;
    background: var(--color-main-yellow);
    font-family: var(--font-main);
    color: whitesmoke;
    font-weight: bold;
    font-size: 6em;
    border: 1px solid black;
    z-index: 10;
    transition-timing-function: ease-in;
    transition: 0.5s;
    &.blue {
        opacity: .3;
    }    
`;

