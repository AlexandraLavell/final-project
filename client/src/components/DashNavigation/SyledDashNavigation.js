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
    padding: 5px;    
`;

export const DashLink = styled(NavLink)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 3px 0 3px;
    height: 75%;
    width: 20%;
    color: black;
    border-style: solid;
    border-color: black;
    border-width: 1px 1px 1px 1px;
    &.active{
        background: black;
        color: var(--color-main-yellow);
        font-weight: bold;
    }
`;