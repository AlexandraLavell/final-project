import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

// context
import MainContext from "../MainContext";

// style
import {    ProjectDashWrapper,
            SubsectionHeader,
            ProjectDashForm,
            FormLabel,
            FormInput,
            FormTextArea,
        }  from "./StyledMainProjectDashboard";


// MAIN FUNCTION
const MainProjectDashboard = (props) => {

    // local state variables to toggle for modifying a project
    const [ modify, setModify ] = useState(false);

    // local state variable for generating a list of employees on a partiular project
    const [projectEmployees, setProjectEmployees] = useState([]);

    // local state variable for update form submission    
    const [ prjName, setPrjName ] = useState();
    const [ prjApproval, setPrjApproval ] = useState();
    const [ prjDescription, setPrjDescription] = useState();
    const [ prjRequestedBudget, setPrjRequestedBudget ] = useState();
    const [ prjActualBudget, setPrjActualBudget ] = useState();
    const [ prjStatus, setPrjStatus ] = useState();
    const [ prjFinalReport, setPrjFinalReport ] = useState();
    

    // consume context
    const { currentProject, setCurrentProject,
            currentProjectDash, setCurrentProjectDash,
            updateProject, deleteProject,
            updateEmployee,
            admPermission,            
            setErrorMessage, 
            } = useContext(MainContext);


    // set up useHistory for the fetch
    const history = useHistory();

    // local fetch function
    const getProjectEmployees = (id) => {
        fetch(`/employees/project/${id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",// response type
                }
            })
            .then(res => res.json())
            .then(data => {
                            setProjectEmployees(data.data);
                        })
            .catch((err) => {
                                setErrorMessage(err);
                                history.push("/error");
                            });        
    };    

    const drop = (ev) => {        

        ev.preventDefault();

        const card_id = ev.dataTransfer.getData("card_id");
        const card_class = ev.dataTransfer.getData("card_class");

        // use includes instead of "===" because the class name also has automatic extra junk
        if (card_class.includes("projectCard")){

            // block a new project from being added to the dash
            // if the current project is being modified
            if(!modify){            
                setCurrentProjectDash();
                setCurrentProject(card_id);
                getProjectEmployees(card_id);
            }

            // const card= document.getElementById(card_id);


            // card.style.display = "block";

            // ev.target.appendChild(card);
        } else if (card_class.includes("employeeCard")){

                // add employees only after "modify" has been selected
                if(!projectEmployees.includes(card_id) && modify){
                    setProjectEmployees([...projectEmployees, card_id]);
                }               
        }
    }

    const dragOver = (ev) => {
        // allows the card to appear on drop. Default is to disappear.
        ev.preventDefault();
    }

    const handleDeleteProject = (prj) => {
        window.alert(`Are you sure you want to delete ${prj}`);
        deleteProject(prj);
        setModify(!modify);
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        
        await updateProject({
                        "_id": currentProjectDash._id,
                        "project_name": prjName,
                        "approval": prjApproval,
                        "description": prjDescription,
                        "requested_budget": prjRequestedBudget,
                        "actual_budget": prjActualBudget,
                        "status": prjStatus,
                        "final_report": prjFinalReport,
                    }); 

        projectEmployees.forEach((emp) => {
            updateEmployee({
                "_id": emp,
                "projects": [currentProjectDash._id]
            })
        })

        setModify(!modify);
    }   

    // start of main return
    return (
        <ProjectDashWrapper
                    id={props.id}
                    onDrop={drop}
                    onDragOver={dragOver}
                    className={props.className}
                    >
            <ProjectDashForm onSubmit={handleSubmit}>
                <SubsectionHeader>{currentProject ? " " : "Drag project card here"}</SubsectionHeader>
                <FormLabel>{currentProject ? "Project number" : " "}</FormLabel>
                <FormInput  type="text" 
                            value={currentProjectDash ? currentProjectDash._id : ""} 
                            placeholder={!!currentProjectDash ? currentProjectDash._id : "Project number"}>                                    
                    </FormInput>
                {/* conditional rendering based on permission level */}
                {admPermission ?                 
                    (<>
                    <FormLabel>{currentProject ? "Project name" : " "}</FormLabel>
                    <FormInput  type="text" 
                                value={modify ? prjName : (currentProjectDash ? currentProjectDash.project_name : "")} 
                                onChange={(ev)=>setPrjName(ev.target.value)}
                                placeholder="Project name"
                                required>
                                </FormInput>
                    <FormLabel>{currentProject ? "Description" : " "}</FormLabel>
                    <FormInput  type="text" 
                                spellCheck
                                value={modify ? prjDescription : (currentProjectDash ? currentProjectDash.description : "")} 
                                onChange={(ev)=>setPrjDescription(ev.target.value)}
                                placeholder="Description"
                                required>
                                </FormInput>
                    <FormLabel>{currentProject ? "Requested budget" : " "}</FormLabel>
                    <FormInput  type="number" 
                                value={modify ? prjRequestedBudget : (currentProjectDash ? currentProjectDash.requested_budget : "")}  
                                // onChange={(ev)=>setPrjRequestedBudget(ev.target.value)}
                                placeholder="Requested budget"
                                required>
                                </FormInput>
                    <FormLabel>{currentProject ? "Approved budget" : " "}</FormLabel>
                    <FormInput  type="number" 
                                value={modify ? prjActualBudget : (currentProjectDash ? currentProjectDash.actual_budget : "")} 
                                onChange={(ev)=>setPrjActualBudget(ev.target.value)}
                                placeholder="Approved budget"
                                required>
                                </FormInput>
                    <FormLabel>{currentProject ? "Approval status" : " "}</FormLabel>
                    <FormInput  type="text" 
                                value={modify ? prjApproval : (currentProjectDash ? currentProjectDash.approval : "")} 
                                onChange={(ev)=>setPrjApproval(ev.target.value)}
                                placeholder="Approval status - pending, approved"
                                required>
                                </FormInput>                                
                    </>)                                
                // second half of conditional
                    :(<>
                        <FormLabel>{currentProject ? "Project name" : " "}</FormLabel>
                        <FormInput  type="text" 
                                value={(currentProjectDash ? currentProjectDash.project_name : "")} 
                                placeholder="Project name"
                                required>
                                </FormInput>
                        <FormLabel>{currentProject ? "Description" : " "}</FormLabel>
                        <FormInput  type="text" 
                                    spellCheck
                                    value={(currentProjectDash ? currentProjectDash.description : "")} 
                                    placeholder="Description"
                                    required>
                                    </FormInput>
                        <FormLabel>{currentProject ? "Requested budget" : " "}</FormLabel>
                        <FormInput  type="number" 
                                    value={(currentProjectDash ? currentProjectDash.requested_budget : "")}  
                                    placeholder="Requested budget"
                                    required>
                                    </FormInput>
                        <FormLabel>{currentProject ? "Approved budget" : " "}</FormLabel>
                        <FormInput  type="number"
                                    value={(currentProjectDash ? currentProjectDash.actual_budget : "")} 
                                    placeholder="Approved budget"
                                    required>
                                    </FormInput>
                        <FormLabel>{currentProject ? "Approval status" : " "}</FormLabel>
                        <FormInput  type="text" 
                                    value={modify ? prjApproval : (currentProjectDash ? currentProjectDash.approval : "")} 
                                    placeholder="Approval status - pending, approved"
                                    required>
                                    </FormInput> 
                            </>)
                            } 
                            {/* //end of conditional */}  
                <FormLabel>{currentProject ? "Status" : " "}</FormLabel>
                <FormInput type="text"
                            value={modify ? prjStatus : (currentProjectDash ? currentProjectDash.status : "")} 
                            onChange={(ev)=>setPrjStatus(ev.target.value)}
                            name="status"                            
                            placeholder="Status - not started, in progress, complete"
                            required>
                            </FormInput>
                <FormLabel>{currentProject ? "Emloyees on this project" : " "}</FormLabel>
                <FormInput  type="text"
                            value={modify ? projectEmployees : (!!currentProjectDash ? projectEmployees : "")} 
                            // onChange={(ev)=>setPrjStatus(ev.target.value)}
                            placeholder="Employees on the project"
                            required>
                            </FormInput>
                <FormLabel>{currentProject ? "Final report" : " "}</FormLabel>
                <FormTextArea   value={modify ? prjFinalReport : (currentProjectDash ? currentProjectDash.final_report : "")} 
                                onChange={(ev)=>setPrjFinalReport(ev.target.value)}
                                placeholder="Final report"
                                >
                                </FormTextArea>                           
                {/* display update and delete buttons when the user is modifying the form, toggled with modify button */}
                {currentProject && modify && <FormInput  type="submit" 
                            className={"pointer"}
                            value="Update"
                            >
                            </FormInput>}                 
                {admPermission && currentProject && modify && <FormInput  type="reset" 
                            className={"pointer"}
                            value="Delete"
                            onClick={(ev)=>{  handleDeleteProject(currentProjectDash._id)}}>
                            </FormInput>} 
                {currentProject && modify && <FormInput type="button" 
                                                        className={"pointer"}
                                                        value="Cancel"
                                                        onClick={()=>{setModify(!modify)}}>
                                                        </FormInput>} 
                {/* modify button toggles with update button */}
                {currentProject && !modify && <FormInput    type="button"
                                                            className={"pointer"}
                                                            value="Modify"
                                                            onClick={() => {setModify(!modify)}}>
                                                            </FormInput>}   
        </ProjectDashForm>
        {/* space for the cards to be dropped */}
        { props.children }          
        </ProjectDashWrapper>
    ) // end of main return
}

export default MainProjectDashboard;