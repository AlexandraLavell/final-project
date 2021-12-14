import React, { useState, 
                useEffect, 
                useReducer 
            } from "react";
import { useHistory } from "react-router-dom";

// persisted state hook
import usePersistedState from "./PersistedStateHook.js";


// circular progress
import CircularProgress from "@material-ui/core/CircularProgress";

//style
import styled from "styled-components";

// main context
export const MainContext = React.createContext(null);

// main provider
export const MainContextProvider = ({children}) => {

    // history for error page
    const history = useHistory();

    // global state variables
    const [signInPage, setSignInPage] = useState(false); //usePersistedState("sign-in", true); //for viewing the signin form
    const [permission, setPermission] = usePersistedState("permission", false); // password is valid
    const [empPermission, setEmpPermission] = usePersistedState("empLevel", false); // employee level access
    const [admPermission, setAdmPermission] = usePersistedState("admLevel", false); // admin level access
    const [employeeList, setEmployeeList] = useState(); // list of all employees
    const [projectList, setProjectList] = useState(); // list of all projects 
    const [joke, setJoke] = useState();
    const [errorMessage, setErrorMessage] = useState("error"); //error message from server
    const [renderFlag, setRenderFlag] = useState(false);

    // main dashboard
    const [mainDash, setMainDash] = useState({}); //all objects on the main dashboard

    // employee dashboard    
    const [currentEmployee, setCurrentEmployee] = useState();
    const [currentEmployeeDash, setCurrentEmployeeDash] = useState();
    
    // project dashboard    
    const [currentProject, setCurrentProject] = useState(); // for the project dashboard
    const [currentProjectDash, setCurrentProjectDash] = useState(); //get all info for project dash        
    
    // extra?
    const [projectProgress, setProjectProgress] = useState(); //for overall progress of all projects
    
    // forms
    const [today, setToday] = useState(); //to determine what day it is for form submission
    const [newEmployee, setNewEmployee] = useState(); // for adding a new employee
    const [projectSubmission, setProjectSubmission] = useState(); //array of all project proposals 
    
    // fetch a joke on load
    useEffect(()=>{ 
        
        fetch(`/joke`, {
        method: "GET",
        headers: {
            Accept: "application/json",// response type
            }
        })
        .then(res => res.json())
        .then(data => {
                        setJoke(data.data);
        })
        .catch((err) => {
                            setErrorMessage(err);
                            history.push("/error");
                        });
    },[renderFlag]);
    
    // fetch a list of all employees
    useEffect(()=>{  

        fetch(`/employees`, {
        method: "GET",
        headers: {
            Accept: "application/json",// response type
            }
        })
        .then(res => res.json())
        .then(data => {
                        setEmployeeList(data.data);
        })
        .catch((err) => {
                            setErrorMessage(err);
                            history.push("/error");
                        });
    },[renderFlag]);

    // fetch a list of all projects
    useEffect(()=>{     

        fetch(`/projects`, {
        method: "GET",
        headers: {
            Accept: "application/json",// response type
            }
        })
        .then(res => res.json())
        .then(data => {
                        setProjectList(data.data);
        })
        .catch((err) => {
                            setErrorMessage(err);
                            history.push("/error");
                        });
    },[renderFlag]);

    // submit a project
    useEffect(() => {
        // if statement stops useEffect from actioning on pageload
        // since no new project submission has been added
        if(!!projectSubmission){

            fetch(`/projects`, {
                method: "POST",
                headers: {
                    Accept: "application/json",// response type
                    "Content-Type": "application/json", //send type of the body                
                },
                body: JSON.stringify(projectSubmission),
                })
                .then(res => res.json())
                .then(data => {                                
                                setRenderFlag(!renderFlag);
                                console.log(data);                                
                })
                .catch(err => {
                    console.log(err);
                    history.push("/error");
                });   
                
            } 
    },[projectSubmission])

    // add new employee
    useEffect(() => {

        // if statement stops useEffect from actioning on pageload
        // since no new employee has been added
        if(!!newEmployee){
            fetch(`/employees`, {
                method: "POST",
                headers: {
                    Accept: "application/json",// response type
                    "Content-Type": "application/json", //send type of the body                
                },
                body: JSON.stringify(newEmployee),
                })
                .then(res => res.json())
                .then(data => {                    
                                setRenderFlag(!renderFlag);
                                console.log(data);                                
                })
                .catch(err => {
                    console.log(err);
                    history.push("/error");
                });   
                
            } 
    },[newEmployee]);

    // fetch a project for the project dash
    useEffect(()=>{ 

        // if statement stops useEffect from actioning on pageload
        // since no project has been added to the dash
        if(!!currentProject){      
            fetch(`/projects/${currentProject}`, {
            method: "GET",
            headers: {
                Accept: "application/json",// response type
                }
            })
            .then(res => res.json())
            .then(data => {
                            setCurrentProjectDash(data.data);
            })
            .catch((err) => {
                                setErrorMessage(err);
                                history.push("/error");
                            });
            }
    },[currentProject]);    

    // fetches a single employee for the employee dash
    useEffect(() => {

        if(!!currentEmployee){
            fetch(`/employees/${currentEmployee}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",// response type
                    }
                })
                .then(res => res.json())
                .then(data => {
                                setCurrentEmployeeDash(data.data);
                })
                .catch((err) => {
                                    setErrorMessage(err);
                                    history.push("/error");
                                });  
                        }    
    }, [currentEmployee]);

    // delete employee
    const deleteEmployee = (emp) => {

        if(!!currentEmployee){
            fetch(`/employees/${emp}`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",// response type
                    }
                })
                .then(res => res.json())
                .then(data => {
                                setCurrentEmployeeDash();
                                setCurrentEmployee();
                                setRenderFlag(!renderFlag);
                                console.log(data.data);
                })
                .catch((err) => {
                                    setErrorMessage(err);
                                    history.push("/error");
                                });  
                        }  
    }

    // delete project
    const deleteProject = (prj) => {

        if(!!currentProject){
            fetch(`/projects/${prj}`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",// response type
                    }
                })
                .then(res => res.json())
                .then(data => {
                                setCurrentProjectDash();
                                setCurrentProject();                                
                                setRenderFlag(!renderFlag);
                                console.log(data.data);
                })
                .catch((err) => {
                                    setErrorMessage(err);
                                    history.push("/error");
                                });  
                        }  
    }

    // update employee
    const updateEmployee = (emp) => {

        console.log(emp);
        
        fetch(`/employees/${emp._id}`, {
            method: "PATCH",
            headers: {
                Accept: "application/json",// response type
                "Content-Type": "application/json", //send type of the body                
            },
            body: JSON.stringify(emp),//UPDATE HERE 
            })
            .then(res => res.json())
            .then(data => {                    
                            setRenderFlag(!renderFlag);
                            console.log(data);                                
            })
            .catch(err => {
                console.log(err);
                history.push("/error");
            });   
        
    };


     // update project
    const updateProject = (prj) => {
            console.log("Project ID: ", prj._id);
        
            fetch(`/projects/${prj._id}`, {
                method: "PATCH",
                headers: {
                    Accept: "application/json",// response type
                    "Content-Type": "application/json", //send type of the body                
                },
                body: JSON.stringify(prj),
                })
                .then(res => res.json())
                .then(data => {                    
                                setRenderFlag(!renderFlag);
                                console.log(data);                                
                })
                .catch(err => {
                    console.log(err);
                    history.push("/error");
                });                             
    } 

    if(
        !employeeList
        || !projectList
        || !joke
    ){  return (
                    <CircularProgressWrapper>
                        <CircularProgress color="primary"/>
                    </CircularProgressWrapper>                    
                )                    
    }


    return <MainContext.Provider value={{
                                            signInPage, setSignInPage,
                                            permission, setPermission,
                                            admPermission, setAdmPermission,
                                            empPermission, setEmpPermission,
                                            currentEmployee, setCurrentEmployee,
                                            currentEmployeeDash, setCurrentEmployeeDash,
                                            updateEmployee, deleteEmployee,
                                            currentProject, setCurrentProject,
                                            currentProjectDash, setCurrentProjectDash,
                                            updateProject, deleteProject,
                                            mainDash, setMainDash,                                            
                                            employeeList, setEmployeeList,
                                            newEmployee, setNewEmployee,
                                            projectList, setProjectList,
                                            today, setToday,
                                            projectProgress, setProjectProgress,
                                            projectSubmission, setProjectSubmission,
                                            renderFlag, setRenderFlag,
                                            errorMessage, setErrorMessage,
                                            joke, setJoke,
        }}>{children}</MainContext.Provider>
}


const CircularProgressWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
`;


export default MainContext;



