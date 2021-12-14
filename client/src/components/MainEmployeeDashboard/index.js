import React, { useContext, useState } from "react";

// context
import MainContext from "../MainContext";

// style
import {    EmployeeDashWrapper,
            SubsectionHeader,
            EmployeeDashForm,
            FormInput,
        }  from "./StyledMainEmployeeDashboard";

const MainEmployeeDashboard = (props) => {

    // local state variables to toggle for modifying an employee
    const [ modify, setModify ] = useState(false);

    // local state variable for update form submission
    const [ empNumber, setEmpNumber ] = useState();
    const [ empFirstName, setEmpFirstName] = useState();
    const [ empLastName, setEmpLastName ] = useState();
    const [ empEmail, setEmpEmail ] = useState();
    const [ empPhone, setEmpPhone ] = useState();
    const [ empProjects, setEmpProjects] = useState([]);    

    // consume context
    const { currentEmployee, setCurrentEmployee,
            currentEmployeeDash, setCurrentEmployeeDash,
            updateEmployee,
            deleteEmployee,
            } = useContext(MainContext);

    const drop = (ev) => {      
        ev.preventDefault();

        const card_id = ev.dataTransfer.getData("card_id");
        const card_class = ev.dataTransfer.getData("card_class");

        // use includes instead of "===" because the class name also has automatic extra junk
        if (card_class.includes("employeeCard")){

            // block a new employee from being added to the dash
            // if the current employee is being modified
            if(!modify){
                setCurrentEmployeeDash();
                setCurrentEmployee(card_id);            
            }

            // const card= document.getElementById(card_id);
            // card.style.display = "block";
            // ev.target.appendChild(card);

        } else if (card_class.includes("projectCard")){

             // add project only after "modify" has been selected
            if(!empProjects.includes(card_id) && modify){
                setEmpProjects([...empProjects, card_id]);
            }

            // const card= document.getElementById(card_id);
            // card.style.display = "block";
            // ev.target.appendChild(card);
        }
    }

    const dragOver = (ev) => {
        // allows the card to appear on drop. Default is to disappear.
        ev.preventDefault();
    }

    const handleDeleteEmployee = (emp) => {
        window.alert(`Are you sure you want to delete ${emp}`);
        deleteEmployee(emp);
        setModify(!modify);
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        
        updateEmployee({
                        "_id": currentEmployeeDash._id,
                        "firstName": empFirstName,
                        "lastName": empLastName,
                        "email": empEmail,
                        "phone": empPhone,
                        "projects": empProjects,
                    }); 

        setModify(!modify);
    }   

    // start of main return
    return (
        <EmployeeDashWrapper
                    id={props.id}
                    onDrop={drop}
                    onDragOver={dragOver}
                    className={props.className}
                    >
            <EmployeeDashForm onSubmit={handleSubmit}>
                <SubsectionHeader>{currentEmployee ? currentEmployee : "Drag employee card here"}</SubsectionHeader>
                <FormInput  type="text" 
                            value={ currentEmployeeDash?._id || ""} 
                            // onChange={(ev)=>setEmpNumber(ev.target.value)}
                            placeholder={currentEmployeeDash?._id || "Employee number"}>                                    
                    </FormInput>
                <FormInput  type="text" 
                            value={modify ? empFirstName : (currentEmployeeDash ? currentEmployeeDash.firstName : "")} 
                            onChange={(ev)=>setEmpFirstName(ev.target.value)}
                            placeholder={currentEmployeeDash?.firstName || "First name"}
                            required>
                            </FormInput>
                <FormInput  type="text" 
                            value={modify ? empLastName : (currentEmployeeDash ? currentEmployeeDash.lastName : "")} 
                            onChange={(ev)=>setEmpLastName(ev.target.value)}
                            placeholder={currentEmployeeDash?.lastName || "Last name"}
                            required>
                            </FormInput>
                <FormInput  type="email" 
                            value={modify ? empEmail : (currentEmployeeDash ? currentEmployeeDash.email : "")}  
                            onChange={(ev)=>setEmpEmail(ev.target.value)}
                            placeholder={currentEmployeeDash?.email || "Email"}
                            required>
                            </FormInput>
                <FormInput  type="tel" 
                            value={modify ? empPhone : (currentEmployeeDash ? currentEmployeeDash.phone : "")} 
                            onChange={(ev)=>setEmpPhone(ev.target.value)}
                            placeholder={currentEmployeeDash?.phone || "Phone"}
                            required>
                            </FormInput>   
                <FormInput  type="text" 
                            value={modify ? empProjects : (currentEmployeeDash ? Object.keys(currentEmployeeDash.projects) : "")} 
                            // onChange={(ev)=>setEmpProjects(ev.target.value)} //REVIEW THIS
                            placeholder={!!currentEmployeeDash ? Object.keys(currentEmployeeDash.projects) : "Projects"}
                            required>
                            </FormInput> 
                 {/* space for the cards to be dropped */}
                { props.children }              
                {/* display update and delete buttons when the user is modifying the form, toggled with modify button */}
                {currentEmployee && modify && <FormInput    type="submit" 
                                                            className={"pointer"}
                                                            value="Update">
                                                            </FormInput>}                 
                {currentEmployee && modify && <FormInput    type="reset" 
                                                            className={"pointer"}
                                                            value="Delete"
                                                            onClick={()=>{handleDeleteEmployee(currentEmployeeDash._id)}}>
                                                            </FormInput>} 
                {currentEmployee && modify && <FormInput    type="button" 
                                                            className={"pointer"}
                                                            value="Cancel"
                                                            onClick={()=>{setModify(!modify)}}>
                                                            </FormInput>} 
                {/* modify button toggles with update button */}
                {currentEmployee && !modify && <FormInput  type="button"
                        className={"pointer"}
                        value="Modify"
                        onClick={() => {    setModify(!modify);
                                            setEmpNumber(currentEmployeeDash._id)
                                            setEmpFirstName(currentEmployeeDash.firstName);
                                            setEmpLastName(currentEmployeeDash.lastName);
                                            setEmpEmail(currentEmployeeDash.email);
                                            setEmpPhone(currentEmployeeDash.phone);
                                            setEmpProjects(Object.keys(currentEmployeeDash.projects));}}>
                            </FormInput>}   
        </EmployeeDashForm>
           
        </EmployeeDashWrapper>
    ) // end of main return





}

export default MainEmployeeDashboard;