import React from "react";
import { NavLink } from "react-router-dom";

// style
import styled from "styled-components";

export const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 2%;
    height: 100px;
    width: 100%;
    background: var(--color-main-yellow);
    font-family: var(--font-main);
    color: black;
    font-weight: bold;
    font-size: 6em;
    border-bottom: 1px solid black;
    z-index: 10;
    transition-timing-function: ease-in-out; 
    transition: opacity 1s;
    &.blue {
        opacity: 0.3;
        border: none;
        transition-timing-function: ease-in-out; 
        transition: opacity 1s;
    }    
`;

export const HeaderNavLink = styled(NavLink)`
    color: black;
`;

export const MinimizedContentSpan = styled.span`
    &.vert {
        /* display: none; */
    }
`;

