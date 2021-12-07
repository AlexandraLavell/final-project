import React from "react";

// assets
//assets
import { FaBell, FaBookmark, FaUser, FaHome } from "react-icons/fa";

// styled components
import {    NavigationWrapper,
            MainDashLink,
            EmployeeDashLink,
            ProjectDashLink } from "./SylesDashNavigation";


const DashNavigation = () => {



    // main return
    return (
        <NavigationWrapper>
        <MainDashLink exact to="/dash">
            <p>Dash</p>
        </MainDashLink>          
        <EmployeeDashLink exact to="/employee">
            <p>Employee</p> 
        </EmployeeDashLink>
        <ProjectDashLink exact to="/project">
            <p>Project</p>
        </ProjectDashLink>
        </NavigationWrapper>
    )

}

export default DashNavigation;



