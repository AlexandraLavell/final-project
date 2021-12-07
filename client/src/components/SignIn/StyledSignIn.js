import { NavLink } from "react-router-dom";

// style 
import styled from "styled-components";


export const SignInWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 99vh;
    width: 100%;
    padding: 5px;
    background-color: var(--color-main-yellow);

`;

export const Greeting = styled.div`
    font-family: "Courier New";
    font-size: 256px;

`;

export const GoToButton = styled(NavLink) `
    height: 1.2em;
    padding: 3px;
    background-color: black;
    position: absolute;
    bottom: 5px;
    right: 15px;
    font-size: .2em;
    text-decoration: none;
    color: var(--color-main-yellow);
`;