import React, { useContext, useState, PureComponent } from "react";

// context
import MainContext from "../MainContext";


// style
import {    AdminDashWrapper,
            SubsectionHeader,
            PieChartWrapper, 
        }  from "./StyledMainAdminDashboard";

// pie charts
import {FunnelChart, 
        Funnel,
        LabelList,
        Label,
        PieChart,
        Pie,
        Sector,
        Cell,
        ResponsiveContainer, } from "recharts";

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

        return {"name":prj._id, "value":(Math.round(100 * prj.actual_budget/budget)), "fill":randomColor}
    });

    pieChartArray.push({"name":"remaining","value":(Math.round(100 * totalRemaining/budget)),"fill": "orange"});

    const data = pieChartArray;

    const RADIAN = Math.PI / 180;
    const customLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        
        return (
            <>
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}% \n`}
            </text>        
            </>
        );
    };
                
    // start of main return
    return (
        <AdminDashWrapper>
            { props.children }
            <SubsectionHeader>Main admin dash</SubsectionHeader>
            <ResponsiveContainer width="75%" height="75%">
                <PieChart width={800} height={400}>                
                <Pie
                    data={data}
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadiue={80}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value" 
                    labelLine={false}                   
                    label={customLabel}                                                 
                >
                <Label
                value={"budget"}
                position="center"
                fill="black"
                style={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    fontFamily: "Courier Prime"
                }}/> 
                </Pie> 
                
                </PieChart>              
            </ResponsiveContainer>
            <div>Todays Projects {todaysProjects}</div>
            <div>Projects waiting for approval</div>
        </AdminDashWrapper>


    ) // end of main return





}

export default MainAdminDashboard;