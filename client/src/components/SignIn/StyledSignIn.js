import { NavLink } from "react-router-dom";

// style 
import styled from "styled-components";


export const SignInWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 2%;
    background-color: var(--color-main-yellow);
`;

export const Greeting = styled.div`
    font-family: "Courier New";
    font-size: 256px;
    font-weight: bold;
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