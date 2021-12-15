import React, { useContext, useState, PureComponent } from "react";

// context
import MainContext from "../MainContext";


// style
import {    AdminDashWrapper,
            SubsectionHeader,
            PieChartWrapper, 
        }  from "./StyledMainAdminDashboard";

// pie charts
import {    Treemap,
            ResponsiveContainer, 
        } from "recharts";

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

    const pieChartArray = projectList?.map((prj) => {
        
        // random color for the piece of pie
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

        totalRemaining = totalRemaining - prj.actual_budget;

        const labelName = prj._id + " " + "$" + prj.actual_budget;

        return {"name":labelName, "size":(Math.round(100 * prj.actual_budget/budget)), "fill": randomColor}
    });

    const leftoverBudgetLabel = "remaining: $" + totalRemaining

    pieChartArray.push({"name":leftoverBudgetLabel,"size":(Math.round(100 * totalRemaining/budget)), "fill": "transparent"});

    console.log(pieChartArray);

    const data = [{
                    "name": "budget",
                    "children": pieChartArray,
    }];

                
    // start of main return
    return (
        <AdminDashWrapper>
            { props.children }
            {/* <SubsectionHeader>Main admin dash</SubsectionHeader> */}
            <PieChartWrapper>
            <ResponsiveContainer width="100%" height="100%">
            <Treemap
                width={400}
                height={200}
                data={data}
                dataKey="size"
                ratio={2 / 1}
                stroke="black"
                fill="transparent"    
                />                    
            </ResponsiveContainer>
            </PieChartWrapper>
            <div>Todays Projects {todaysProjects}</div>
            <div>Projects waiting for approval</div>
        </AdminDashWrapper>


    ) // end of main return





}

export default MainAdminDashboard;