import React, { useState, useContext } from "react";

// context
import MainContext from "../MainContext";

// style
import {    ProjectDashWrapper,
            SubsectionHeader,
            ProjectDashForm,
            FormInput,
        }  from "./StyledMainProjectDashboard";



const MainProjectDashboard = (props) => {

    // local state variables to toggle for modifying a project
    const [ modify, setModify ] = useState(false);

    // local state variable for update form submission    
    const [ prjName, setPrjName ] = useState();
    const [ prjApproval, setPrjApproval ] = useState();
    const [ prjDescription, setPrjDescription] = useState();
    const [ prjRequestedBudget, setPrjRequestedBudget ] = useState();
    const [ prjActualBudget, setPrjActualBudget ] = useState();
    const [ prjStatus, setPrjStatus ] = useState();
    const [prjFinalReport, setPrjFinalReport ] = useState();

    

    // consume context
    const { currentProject, 
            setCurrentProject,
            currentProjectDash,
            updateProject,
            deleteProject, 
            } = useContext(MainContext);

    const drop = (ev) => {        

        ev.preventDefault();

        const card_id = ev.dataTransfer.getData("card_id");
        const card_class = ev.dataTransfer.getData("card_class");

        // use includes instead of "===" because the class name also has automatic extra junk
        if (card_class.includes("employeeCard")){

            const card= document.getElementById(card_id);

            card.style.display = "block";

            ev.target.appendChild(card);
        } else if (card_class.includes("projectCard")){

            setCurrentProject(card_id);

            // const card= document.getElementById(card_id);

            // console.log("ELEMENT BY ID ", card);

            // card.style.display = "block";

            // ev.target.appendChild(card);
        }
    }

    const dragOver = (ev) => {
        // allows the card to appear on drop. Default is to disappear.
        ev.preventDefault();
    }

    const handleDeleteProject = (prj) => {
        window.alert(`Are you sure you want to delete ${prj}`);
        deleteProject(prj);
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        
        updateProject({
                        "_id": currentProjectDash._id,
                        "project_name": prjName,
                        "approval": prjApproval,
                        "description": prjDescription,
                        "requested_budget": prjRequestedBudget,
                        "actual_budget": prjActualBudget,
                        "status": prjStatus,
                        "final_report": prjFinalReport,
                    }); 
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
                <SubsectionHeader>{currentProject ? currentProject : "Drag project card here"}</SubsectionHeader>
                <FormInput  type="text" 
                            value={currentProjectDash ? currentProjectDash._id : ""} 
                            placeholder={!!currentProjectDash ? currentProjectDash._id : "Project number"}>                                    
                    </FormInput>
                <FormInput  type="text" 
                            value={modify ? prjName : (currentProjectDash ? currentProjectDash.project_name : "")} 
                            onChange={(ev)=>setPrjName(ev.target.value)}
                            placeholder={!!currentProjectDash ? currentProjectDash.project_name : "First name"}
                            required>
                            </FormInput>
                <FormInput  type="text" 
                            value={modify ? prjDescription : (currentProjectDash ? currentProjectDash.description : "")} 
                            onChange={(ev)=>setPrjDescription(ev.target.value)}
                            placeholder={!!currentProjectDash ? currentProjectDash.description : "Description"}
                            required>
                            </FormInput>
                <FormInput  type="number" 
                            value={modify ? prjRequestedBudget : (currentProjectDash ? currentProjectDash.requested_budget : "")}  
                            onChange={(ev)=>setPrjRequestedBudget(ev.target.value)}
                            placeholder={!!currentProjectDash ? currentProjectDash.requested_budget : "Requested budget"}
                            required>
                            </FormInput>
                <FormInput  type="number" 
                            value={modify ? prjActualBudget : (currentProjectDash ? currentProjectDash.actual_budget : "")} 
                            onChange={(ev)=>setPrjActualBudget(ev.target.value)}
                            placeholder={!!currentProjectDash ? currentProjectDash.actual_budget : "Actual budget"}
                            required>
                            </FormInput> 
                <FormInput  type="text" 
                            value={modify ? prjStatus : (currentProjectDash ? currentProjectDash.status : "")} 
                            onChange={(ev)=>setPrjStatus(ev.target.value)}
                            placeholder={!!currentProjectDash ? currentProjectDash.status : "Status"}
                            required>
                            </FormInput>
                <FormInput  type="text" 
                            value={modify ? prjFinalReport : (currentProjectDash ? currentProjectDash.final_report : "")} 
                            onChange={(ev)=>setPrjFinalReport(ev.target.value)}
                            placeholder={!!currentProjectDash ? currentProjectDash.final_report : "Final report"}
                            required>
                            </FormInput>                           
                {/* display update and delete buttons when the user is modifying the form, toggled with modify button */}
                {currentProject && modify && <FormInput  type="submit" 
                            className={"pointer"}
                            value="Update">
                            </FormInput>}                 
                {currentProject && modify && <FormInput  type="reset" 
                            className={"pointer"}
                            value="Delete"
                            onClick={(ev)=>{  handleDeleteProject(currentProjectDash._id)}}>
                            </FormInput>} 
                {/* modify button toggles with update button */}
                {currentProject && !modify && <FormInput  type="button"
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