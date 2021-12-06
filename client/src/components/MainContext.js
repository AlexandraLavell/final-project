import React, { useState, 
                useEffect, 
                useReducer 
            } from "react";
import { useHistory } from "react-router-dom";

// circular progress
// import CircularProgress from "@material-ui/core/CircularProgress";

// style
import styled from "styled-components";

export const MainContext = React.createContext(null);

export const MainContextProvider = ({children}) => {

    const [currentEmployee, setCurrentEmployee] = useState({}); // for the employee dashboard
    const [currentProject, setCurrentProject] = useState({}); // for the project dashboard
    const [mainDash, setMainDash] = useState({}); //all objects on the main dashboard
    const [employeeList, setEmployeeList] = useState(["employee-1", "employee-2"]); // list of all employees -- will be on the database
    const [projectList, setProjectList] = useState(["project-1", "project-2"]); // list of all projects -- will be on the database
    const [today, setToday] = useState(); //to determine what day it is
    const [projectProgress, setProjectProgress] = useState(); //for overall progress of all projects
    const [projectSubmission, setProjectSubmission] = useState(); //array of all project proposals -- will be on the database




    return <MainContext.Provider value={{
                                            currentEmployee, setCurrentEmployee,
                                            currentProject, setCurrentProject,
                                            mainDash, setMainDash,                                            
                                            employeeList, setEmployeeList,
                                            projectList, setProjectList,
                                            today, setToday,
                                            projectProgress, setProjectProgress,
                                            projectSubmission, setProjectSubmission,
        }}>{children}</MainContext.Provider>
}

export default MainContext;