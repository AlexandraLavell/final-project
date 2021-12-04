// style
import styled from "styled-components";

export const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    height: 100px;
    width: 100%;
    background: green;
    z-index: 10;
    transition-timing-function: ease-in;
    transition: 0.5s;
    &.blue {
        opacity: .3;
    }    
`;

