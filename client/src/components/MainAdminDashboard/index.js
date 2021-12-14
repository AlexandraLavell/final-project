import React, { useContext, useState } from "react";

// context
import MainContext from "../MainContext";


// style
import {    AdminDashWrapper,
            SubsectionHeader,
            PieChartWrapper, 
        }  from "./StyledMainAdminDashboard";

// pie charts
import { PieChart } from "react-minimal-pie-chart";

// MAIN FUNCTION
const MainAdminDashboard = (props) => {

    // local state
    const [budget, setBudget] = useState(300);

    // consume state
    const { projectList, employeeList } = useContext(MainContext);    

    const todaysProjects = [];

    employeeList.map((emp) => {            
        // // this generates a list of projects the employee is working on today
        const keyList = Object.keys(emp.projects);         
                    
        keyList.forEach((key) => {           
            
            emp.projects[key].forEach((keyDate) => {

                if(((new Date(keyDate)).getDay() === (new Date()).getDay()) 
                && ((new Date(keyDate)).getMonth() === (new Date()).getMonth())
                && ((new Date(keyDate)).getFullYear() === (new Date()).getFullYear()))
                {                  
                    if(!todaysProjects.includes(key)){
                        todaysProjects.push(key);
                    }
                }
            })
        })    
    });

    var totalRemaining = 300;

    const pieChartArray = projectList.map((prj) => {
        
        // random color for the piece of pie
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

        totalRemaining = totalRemaining - prj.actual_budget;

        return {"title":prj._id, "value":(Math.round(100 * prj.actual_budget/budget)), "color": randomColor}
    });

    pieChartArray.push({"title":"remaining", "value":(Math.round(100 * totalRemaining/budget)), "color": "black"});
    
    // start of main return
    return (
        <AdminDashWrapper>
            { props.children }
            <SubsectionHeader>Main admin dash</SubsectionHeader>
            <PieChartWrapper>
                <PieChart 
                    data={pieChartArray}
                    radius={10}
                    lineWidth={50}
                    label={({ dataEntry }) => dataEntry.value + "%"}
                    labelPosition={80}
                    labelStyle={{fontSize:"2px", fontFamily:"Courier Prime", fill:"lemonchiffon"}}
                    />
            </PieChartWrapper>
            <div>Todays Projects {todaysProjects}</div>
            <div>Projects waiting for approval</div>
        </AdminDashWrapper>


    ) // end of main return





}

export default MainAdminDashboard;