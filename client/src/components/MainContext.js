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

    const [signInPage, setSignInPage ] = usePersistedState("sign-in", true); //for keeping the use logged in
    const [currentEmployee, setCurrentEmployee] = useState(); // for the employee dashboard
    const [currentProject, setCurrentProject] = useState(); // for the project dashboard
    const [projectDash, setProjectDash] = useState(); //get all info for project dash
    const [mainDash, setMainDash] = useState({}); //all objects on the main dashboard
    const [employeeList, setEmployeeList] = useState(); 
    const [newEmployee, setNewEmployee] = useState();
    const [projectList, setProjectList] = useState(); // list of all projects -- will be on the database
    const [today, setToday] = useState(); //to determine what day it is
    const [projectProgress, setProjectProgress] = useState(); //for overall progress of all projects
    const [projectSubmission, setProjectSubmission] = useState(); //array of all project proposals -- will be on the database
    const [errorMessage, setErrorMessage] = useState("error"); //error message from server
    const [joke, setJoke] = useState();
    
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
    },[]);
    
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
    },[]);

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
    },[]);

    // submit a project
    useEffect(() => {
        // if statement stops useEffect from actioning on pageload
        // since no new project submission has been added
        if(projectSubmission){
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
        if(newEmployee){
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
                                console.log(data);                                
                })
                .catch(err => {
                    console.log(err);
                    history.push("/error");
                });   
                
            } 
    },[newEmployee]);

      // fetch a list of all projects
    useEffect(()=>{ 
        // if statement stops useEffect from actioning on pageload
        // since no project has been added to the dash
        if(currentProject){      
        fetch(`/projects/${currentProject}`, {
        method: "GET",
        headers: {
            Accept: "application/json",// response type
            }
        })
        .then(res => res.json())
        .then(data => {
                        setProjectDash(data.data);
        })
        .catch((err) => {
                            setErrorMessage(err);
                            history.push("/error");
                        });
        }
    },[currentProject]);    

     // fetch a list of all projects
    useEffect(()=>{ 
        // if statement stops useEffect from actioning on pageload
        // since no project has been added to the dash
        if(currentProject){      
        fetch(`/projects/${currentProject}`, {
        method: "GET",
        headers: {
            Accept: "application/json",// response type
            }
        })
        .then(res => res.json())
        .then(data => {
                        setProjectDash(data.data);
        })
        .catch((err) => {
                            setErrorMessage(err);
                            history.push("/error");
                        });
        }
    },[currentProject]);

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
                                            currentEmployee, setCurrentEmployee,
                                            currentProject, setCurrentProject,
                                            projectDash, setProjectDash,
                                            mainDash, setMainDash,                                            
                                            employeeList, setEmployeeList,
                                            newEmployee, setNewEmployee,
                                            projectList, setProjectList,
                                            today, setToday,
                                            projectProgress, setProjectProgress,
                                            projectSubmission, setProjectSubmission,
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



