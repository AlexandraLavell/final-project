import { NavLink } from "react-router-dom";

// style 
import styled from "styled-components";


export const SignInWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: var(--color-main-yellow);

`;

export const Greeting = styled.div``;

export const GoToButton = styled(NavLink) ``;