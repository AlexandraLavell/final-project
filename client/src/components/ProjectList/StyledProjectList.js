import { NavLink } from "react-router-dom";

// style
import styled from "styled-components";

export const ProjectContainerWrapper = styled.div`
    position: relative;
    display: flex;    
    flex-direction: column;
    justify-content: flex-start;
    color:white;
    width: 25%;
    background: var(--color-main-yellow);
    border: 1px solid black;
`;

export const ProjectListHeader = styled.div`    
    height: fit-content;
    display: flex; 
    justify-content: space-between;
    color:black;
    font-family: var(--font-main);
    width: 100%;
    padding: 15px;
    background: var(--color-main-yellow);
    /* border: 1px solid black; */
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

export const ProjectListWrapper = styled.div`
    position: relative;
    display: flex;    
    flex-direction: column;
    justify-content: flex-start;
    color:white;
    width: 100%;
    padding: 15px;
    background: lemonchiffon;
    /* border: 1px solid black; */
`;
