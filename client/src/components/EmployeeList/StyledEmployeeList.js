import React from "react";
import { NavLink } from "react-router-dom";

// Tippy
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

// style
import styled from "styled-components";

export const EmployeeContainerWrapper = styled.div`
    position: relative;
    display: flex;    
    flex-direction: column;
    justify-content: flex-start;
    color:white;
    width: 25%;
    background: var(--color-main-yellow);
    border: 1px solid black;
`;

export const SubsectionHeader = styled.div`    
    min-height: 50px;
    display: flex; 
    justify-content: space-between;
    color:black;
    font-family: var(--font-main);
    width: 100%;
    padding: 15px;
    background: var(--color-main-yellow);
    border-bottom: 1px solid black;
`;

export const AddNav = styled(NavLink)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    width: fit-content;
    color: black;
    cursor: pointer;
`;

export const EmployeeListWrapper = styled.div`
    position: relative;
    display: flex;    
    flex-direction: column;
    justify-content: flex-start;
    color:white;
    width: 100%;
    padding: 15px;
    background: var(--color-main-yellow);
`;

export const TippyWrapper = styled(Tippy)`
    display: flex;
    flex-direction: column;
    overflow: none;
    flex-wrap: wrap;
    height: fit-content;
    height: fit-content;
    width: fit-content;
    font-family: var(--font-main);
    font-weight: bold;
    color: white;
    border-radius: 0;
`;

// used to wrap words in the tippy so there is no overflow
export const TippyContent = styled.div`
    word-break: break-all;
    /* width displays two employee numbers per line */
    width: 8em;
`;