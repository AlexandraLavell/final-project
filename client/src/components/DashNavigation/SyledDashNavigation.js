import { NavLink } from "react-router-dom";

//style
import styled from "styled-components";

export const NavigationWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    min-height: 50px;
    width: 100%;
    background: var(--color-main-yellow);
    border-bottom: 1px solid black;
`;

export const DashLink = styled(NavLink)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    color: black;
    font-size: 1.2em;
    border-style: solid;
    border-color: black;
    &.active{
        background: black;
        color: white;
        font-weight: bold;
    }
`;