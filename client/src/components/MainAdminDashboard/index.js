import React, { useContext, useState } from "react";

// context
import MainContext from "../MainContext";


// style
import {    AdminDashWrapper,
            SubsectionHeader 
        }  from "./StyledMainAdminDashboard";

// pie charts
import { PieChart } from "react-minimal-pie-chart";

// MAIN FUNCTION
const MainAdminDashboard = (props) => {

    // local state
    const [budget, setBudget] = useState(300000);

    // consume state
    const { projectList, employeeList } = useContext(MainContext);
    
    const todaysProjects = employeeList.map((emp) => {
        return emp.projects;
    })

    // start of main return
    return (
        <AdminDashWrapper>
            { props.children }
            <SubsectionHeader>Main admin dash</SubsectionHeader>
            <PieChart 
                data={[
                        {title: "One", value: 30, color: "lightBlue"},
                        {title: "Two", value: 15, color: "#e38627"},
                        {title: "Three", value: 20, color: "#e38627"}
                    ]} />
        </AdminDashWrapper>





    ) // end of main return





}

export default MainAdminDashboard;