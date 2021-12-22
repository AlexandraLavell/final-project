import React, { useContext, useState } from "react";

// context
import MainContext from "../MainContext";

// style
import {    AdminDashWrapper,
            SubsectionHeader,
            PieChartWrapper, 
            TreeChartWrapper,
            MultipleListContainer,
            ListWrapper,
            ItemList,
            ListNumber,
        }  from "./StyledMainAdminDashboard";

// pie charts
import {    Treemap,
            ResponsiveContainer, 
            RadialBarChart,
            RadialBar,
            Legend,
        } from "recharts";

// main component
const MainAdminDashboard = (props) => {

    // local state
    const [budget, setBudget] = useState(300);

    // consume state
    const { projectList, employeeList } = useContext(MainContext);    


    // TODO: LIFT TO CONTEXT
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

    // project summary TODO - LIFT TO CONTEXT
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

        return {"name":labelName, 
                "size":(Math.round(100 * prj.actual_budget/budget)), 
                "fill": randomColor}
    });

    const leftoverBudgetLabel = "remaining: $" + totalRemaining

    pieChartArray.push({"name":leftoverBudgetLabel,"size":(Math.round(100 * totalRemaining/budget)), "fill": "transparent"});

    const data = [{
                    "name": "budget",
                    "children": pieChartArray,
    }];

    // project completion status bar pie graph
    const statusData = [
        {
            "name": "Complete",
            "uv": completedProjects.length,
            "fill":  "#" + Math.floor(Math.random()*16777215).toString(16)
        },
        {
            "name": "In progress",
            "uv": inprogressProjects.length,
            "fill":  "#" + Math.floor(Math.random()*16777215).toString(16)
        },
        {
            "name": "Not started",
            "uv": notstartedProjects.length,
            "fill":  "#" + Math.floor(Math.random()*16777215).toString(16)
        }
    ];

    // start of main return
    return (
        <AdminDashWrapper>
            { props.children }
            <SubsectionHeader>Budget</SubsectionHeader>
            <TreeChartWrapper>
                <ResponsiveContainer width="100%" height="100%" margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <Treemap
                    width={400}
                    height={200}
                    data={data}
                    dataKey="size"
                    ratio={4 / 3}
                    stroke="black"
                    fill="transparent"                        
                    />                    
                </ResponsiveContainer>
            </TreeChartWrapper>
            <SubsectionHeader>Project status</SubsectionHeader>
            <PieChartWrapper>
                <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart width={730} 
                                height={250} 
                                innerRadius="45%" 
                                outerRadius="100%" 
                                data={statusData} 
                                startAngle={0} 
                                endAngle={360}
                                >
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
            <MultipleListContainer>
                <ListWrapper>
                    <SubsectionHeader><p>Today's Projects</p></SubsectionHeader>
                    <ItemList>{todaysProjects.map((prj)=>{return <ListNumber>{prj}</ListNumber>})}</ItemList>                
                </ListWrapper>
                <ListWrapper>
                    <SubsectionHeader><p>Projects waiting for approval</p></SubsectionHeader>
                    <ItemList>{waitingProjects.map((prj)=>{return <ListNumber>{prj}</ListNumber>})}</ItemList>
                </ListWrapper>
            </MultipleListContainer>
            
        </AdminDashWrapper>
    ) // end of main return
}

export default MainAdminDashboard;