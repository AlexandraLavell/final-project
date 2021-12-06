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
    background: red;
    margin: 0;
    
`;

export const MainDashLink = styled(NavLink)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75%;
    width: 20%;
    color: black;
    background: lemonchiffon;
    border: 1px solid black;
    border-radius: 5px 5px 0 0;
`;

export const EmployeeDashLink = styled(NavLink)`
    position: relative;
    display: flex;    
    align-items: center;
    justify-content: center;
    height: 75%;
    width: 20%;
    color: black;
    background: lemonchiffon;
    border: 1px solid black;
    border-radius: 5px 5px 0 0;
`;

export const ProjectDashLink = styled(NavLink)`
    position: relative;    
    align-items: center;
    justify-content: center;
    display: flex;
    height: 75%;
    width: 20%;
    color: black;
    background: lemonchiffon;
    border: 1px solid black;
    border-radius: 5px 5px 0 0;
    margin-right: 10%
`;