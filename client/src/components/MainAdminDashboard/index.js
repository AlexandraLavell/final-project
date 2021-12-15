import React, { useContext, useState, PureComponent, useEffect } from "react";

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
            PieChart,
            Pie,
            RadialBarChart,
            RadialBar,
            Legend,
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

    // project summary
    const approvedProjects = [];
    const waitingProjects = [];
    const inprogressProjects = [];
    const notstartedProjects = [];
    const completedProjects = [];

    
        projectList.forEach((prj) => {

            if (prj.approval === "pending"){
                waitingProjects.push(prj._id);
            }
            if (prj.approval === "approved"){
                approvedProjects.push(prj._id);
            }
            if (prj.status === "not started"){
                notstartedProjects.push(prj._id);
            }
            if (prj.status === "in progress"){
                inprogressProjects.push(prj._id);
            }
            if (prj.status === "complete"){
                completedProjects.push(prj._id);
            }
        });

    

    // budget treemap
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

    // project completion status pie graph

    const statusData = [
        {
            "name": "Complete",
            "uv": completedProjects.length,
            "pv": 80,
            "fill":  "#" + Math.floor(Math.random()*16777215).toString(16)
        },
        {
            "name": "In progress",
            "uv": inprogressProjects.length,
            "pv": completedProjects.length + inprogressProjects.length + notstartedProjects.length,
            "fill":  "#" + Math.floor(Math.random()*16777215).toString(16)
        },
        {
            "name": "Not started",
            "uv": notstartedProjects.length,
            "pv": completedProjects.length + inprogressProjects.length + notstartedProjects.length,
            "fill":  "#" + Math.floor(Math.random()*16777215).toString(16)
        }
    ];

    console.log(statusData);
                
    // start of main return
    return (
        <AdminDashWrapper>
            { props.children }
            <SubsectionHeader>Budget</SubsectionHeader>
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
            <SubsectionHeader>Project status</SubsectionHeader>
            <PieChartWrapper>
                <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart width={730} 
                                height={250} 
                                innerRadius="45%" 
                                outerRadius="100%" 
                                data={statusData} 
                                startAngle={0} 
                                endAngle={360}>
                <RadialBar
                    minAngle={60} 
                    label={{ fill: '#fff', position: 'insideStart' }} 
                    background clockWise={true} 
                    dataKey='uv'    
                    />
                    <Legend iconSize={10} 
                            width={120} 
                            height={140} 
                            layout='vertical' 
                            verticalAlign='middle' 
                            align="right" />
                </RadialBarChart>                   
                </ResponsiveContainer>
            </PieChartWrapper>
            <div>Todays Projects {todaysProjects}</div>
            <div>Projects waiting for approval</div>
        </AdminDashWrapper>


    ) // end of main return





}

export default MainAdminDashboard;