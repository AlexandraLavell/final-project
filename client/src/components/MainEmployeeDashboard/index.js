import React, { useContext, useState, useEffect } from "react";

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
            updateEmployee, deleteEmployee,
            admPermission,
            } = useContext(MainContext);

    const drop = async (ev) => {      
        ev.preventDefault();

        const card_id = ev.dataTransfer.getData("card_id");
        const card_class = ev.dataTransfer.getData("card_class");

        // use includes instead of "===" because the class name also has automatic extra junk
        if (card_class.includes("employeeCard")){

            // block a new employee from being added to the dash
            // if the current employee is being modified
            if(!modify){
                //  clears the dash from the previous employee
                setCurrentEmployeeDash();

                // sends new employee information triggering dash update
                setCurrentEmployee(card_id);         
            }

        } else if (card_class.includes("projectCard")){

             // add project only after "modify" has been selected
            if(!empProjects.includes(card_id) && modify){
                setEmpProjects([...empProjects, card_id]);
            }
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
        setCurrentEmployeeDash();        
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

    useEffect(()=>{
        if(!!currentEmployeeDash){
            setEmpNumber(currentEmployeeDash._id)
            setEmpFirstName(currentEmployeeDash.firstName);
            setEmpLastName(currentEmployeeDash.lastName);
            setEmpEmail(currentEmployeeDash.email);
            setEmpPhone(currentEmployeeDash.phone);
            setEmpProjects(Object.keys(currentEmployeeDash.projects));            
        }
    },[currentEmployeeDash]);
    
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
                            value={empNumber} 
                            placeholder="Employee number">                                    
                    </FormInput>
                <FormInput  type="text" 
                            // clears value when employee deleted
                            value={empFirstName} 
                            onChange={(ev)=> (modify && setEmpFirstName(ev.target.value))}
                            placeholder="First name"
                            required>
                            </FormInput>
                <FormInput  type="text" 
                            // clears value when employee deleted
                            value={empLastName}
                            onChange={(ev)=>(modify && setEmpLastName(ev.target.value))}
                            placeholder="Last name"
                            required>
                            </FormInput>
                <FormInput  type="email" 
                            // clears value when employee deleted
                            value={empEmail}  
                            onChange={(ev)=>(modify && setEmpEmail(ev.target.value))}
                            placeholder="Email"
                            required>
                            </FormInput>
                <FormInput  type="tel" 
                            // clears value when employee deleted
                            value={empPhone} 
                            onChange={(ev)=>(modify && setEmpPhone(ev.target.value))}
                            placeholder="Phone"
                            required>
                            </FormInput>   
                <FormInput  type="text" 
                            value={empProjects} 
                            // onChange={(ev)=>setEmpProjects(ev.target.value)}
                            placeholder="Projects"
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
                {admPermission && currentEmployee && !modify && <FormInput  type="button"
                        className={"pointer"}
                        value="Modify"
                        onClick={() => {setModify(!modify);}}>
                            </FormInput>}   
            </EmployeeDashForm>           
        </EmployeeDashWrapper>
    ) // end of main return
}

export default MainEmployeeDashboard;