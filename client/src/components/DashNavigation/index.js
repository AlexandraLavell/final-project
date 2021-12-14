import React from "react";

// assets
//assets
import { FaBell, FaBookmark, FaUser, FaHome } from "react-icons/fa";

// styled components
import {    NavigationWrapper,
            DashLink } 
            from "./SyledDashNavigation";


const DashNavigation = () => {

    // main return
    return (
        <NavigationWrapper>
        <DashLink activeClassName="active" exact to="/dash">
            <p>Dash</p>
        </DashLink>          
        <DashLink activeClassName="active" exact to="/employee">
            <p>Employee</p> 
        </DashLink>
        <DashLink activeClassName="active" exact to="/project">
            <p>Project</p>
        </DashLink>
        </NavigationWrapper>
    )

}



export default DashNavigation;



