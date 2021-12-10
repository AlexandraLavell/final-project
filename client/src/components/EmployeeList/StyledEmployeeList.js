import React from "react";

// Tippy
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

// style
import styled from "styled-components";

export const EmployeeListWrapper = styled.div`
    position: relative;
    display: flex;    
    flex-direction: column;
    justify-content: flex-start;
    color:white;
    width: 25%;
    padding: 15px;
    background: lemonchiffon;
    border: 1px solid black;
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
    color: var(--color-main-yellow);
    border-radius: 0;
`;

// used to wrap words in the tippy so there is no overflow
export const TippyContent = styled.div`
    word-break: break-all;
    /* width displays two employee numbers per line */
    width: 8em;
    
`;