// Tippy
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

// style
import styled from "styled-components";

export const CardWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 15px 25px;
    color: black;
    cursor: grab;
    margin-bottom: 15px;
    border: 1px solid black;
    height: 6em;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.09);
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
    color: lemonchiffon;
    border-radius: 0;
`;

// used to wrap words in the tippy so there is no overflow
export const TippyContent = styled.div`
    word-break: break-all;
    /* width displays two employee numbers per line */
    width: 8em;
    
`;