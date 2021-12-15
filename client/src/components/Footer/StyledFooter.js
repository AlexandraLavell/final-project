import React from "react";
import { NavLink } from "react-router-dom";



// style
import styled from "styled-components";

export const FooterWrapper = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    display: flex;
    height: 5vh;
    width: 100%;
    background: lemonchiffon;
    font-family: var(--font-main);
    /* color: lemonchiffon; */
    /* font-size: 1.2em; */
    font-weight: bold;
    border-top: 1px solid lemonchiffon;
`;

export const SignoutNavLink = styled(NavLink)`
    position: absolute;    
    right: 5%;
    display: flex;
    justify-content: center;
    height: 1.5em;
    width: 10%;
    padding: 4px;
    background-color: black; 
    box-shadow:0 0 100px #fffacd;
    /* font-size: 3em; */
    font-weight: bold;
    text-decoration: none;
    border-radius: 0;
    color: lemonchiffon;
    &.pointer{
        cursor: pointer;
    }
`;


