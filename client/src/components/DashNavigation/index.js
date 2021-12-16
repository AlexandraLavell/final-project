import React from "react";

// styled components
import {    NavigationWrapper,
            DashLink } 
            from "./SyledDashNavigation";

// main component
const DashNavigation = () => {

    // main return
    return (
        <NavigationWrapper>
        <DashLink activeClassName="active" exact to="/">
            <p>Dash</p>
        </DashLink>          
        <DashLink activeClassName="active" exact to="/employee">
            <p>Employee</p> 
        </DashLink>
        <DashLink activeClassName="active" exact to="/project">
            <p>Project</p>
        </DashLink>
        </NavigationWrapper>
    ) // end of main return
}

export default DashNavigation;



