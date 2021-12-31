import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

// context
import MainContext from "../MainContext"

// style
import {    ProjectFormWrapper,
            FormInput,
            SubsectionHeader,  
            } from "./StyledAddProjectForm";

// main component
const AddProjectForm = () => {

    // consume context
    const { setProjectSubmission,
            } = useContext(MainContext);  
    
    const history = useHistory();

    // for project submission form        
    const today = new Date();

    // local state variables
    const [ submissionDate, setSubmissionDate ] = useState(today.toDateString());
    const [ prjName, setPrjName ] = useState();
    const [ prjDescription, setPrjDescription ] = useState();   
    const [ prjBudgetRequest, setPrjBudgetRequest ] = useState();

    // submit new project form
    const handleSubmit = (ev) => {
        ev.preventDefault();
        
        setProjectSubmission({
                        "project_name": prjName,
                        "approval": "pending",
                        "description": prjDescription,
                        "requested_budget": prjBudgetRequest,
                        "actual_budget": "",
                        "status": "not started",
                        "final_report": "" 
                    }); 
        history.push("/project");
    }   
    
    // start main return
    return(
        <ProjectFormWrapper onSubmit={handleSubmit}>
            <SubsectionHeader>Project request</SubsectionHeader>
            <FormInput  type="text" 
                        value={submissionDate}
                        required>
                        </FormInput>       
            <FormInput  type="text" 
                        value={prjName} 
                        onChange={(ev)=>setPrjName(ev.target.value)}
                        placeholder="Project name"
                        required>                                    
                        </FormInput>
            <FormInput  type="text" 
                        value={prjDescription} 
                        onChange={(ev)=>setPrjDescription(ev.target.value)}
                        placeholder="Short description"
                        required>
                        </FormInput>  
            <FormInput  type="number" 
                        min="0"
                        step="1"
                        value={prjBudgetRequest} 
                        onChange={(ev)=>setPrjBudgetRequest(ev.target.value)}
                        placeholder="Requested budget"
                        required>
                        </FormInput>                         
            <FormInput  type="submit" 
                        value="Submit"
                        className="submit">
                        </FormInput> 
        </ProjectFormWrapper>
    ) // end of main return
}

export default AddProjectForm;