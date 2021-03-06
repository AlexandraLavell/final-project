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
export const ProjectListWrapper = styled.div`
    position: relative;
    display: flex;    
    flex-direction: column;
    justify-content: flex-start;
    color:white;
    width: 100%;
    padding: 15px;
    background: var(--color-main-yellow);
    /* border: 1px solid black; */
`;
export const AlertMark = styled.div`
    position: absolute;
    right: 0;
    bottom: 1em;
    color: DeepPink;
    height: 25%;
    width: 25%;
    font-size: 2em;
    justify-self: flex-end;
    align-self: flex-end;
`;