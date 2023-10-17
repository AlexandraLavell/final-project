import React, { useState, useContext } from "react";
import { redirect } from "react-router-dom"

// context
import MainContext from "../MainContext";

// style
import {    EmployeeFormWrapper, 
            FormInput,
            SubsectionHeader,
        } from "./StyledAddEmployeeForm";

// main component
const AddEmployeeForm = () => {

    // consume context
    const { setNewEmployee, admPermission } = useContext(MainContext);

    // redirect for move after submit
    
    
    // local state variables
    const [ empNumber, setEmpNumber ] = useState();
    const [ empFirstName, setEmpFirstName ] = useState();
    const [ empLastName, setEmpLastName ] = useState();
    const [ empPhone, setEmpPhone ] = useState();
    const [ empEmail, setEmpEmail ] = useState();   

    // submit add employee form
    const handleSubmit = (ev) => {
        ev.preventDefault();
        
        setNewEmployee({
                        "_id": empNumber,
                        "firstName": empFirstName,
                        "lastName": empLastName,
                        "email": empEmail,
                        "phone": empPhone,
                    }); 
        redirect("/dash");
    }   

    // start main return
    return(
        <EmployeeFormWrapper onSubmit={handleSubmit}>
            <SubsectionHeader>Add Employee </SubsectionHeader>
            <FormInput  type="text" 
                                value={empNumber} 
                                onChange={(ev)=>setEmpNumber(ev.target.value)}
                                placeholder="Employee Number">                                    
                                </FormInput>
            <FormInput  type="text" 
                                value={empFirstName} 
                                onChange={(ev)=>setEmpFirstName(ev.target.value)}
                                placeholder="First Name"
                                required>
                                </FormInput>
            <FormInput  type="text" 
                                value={empLastName} 
                                onChange={(ev)=>setEmpLastName(ev.target.value)}
                                placeholder="Last Name"
                                required>
                                </FormInput>
            <FormInput  type="email" 
                                value={empEmail} 
                                onChange={(ev)=>setEmpEmail(ev.target.value)}
                                placeholder="Email"
                                required>
                                </FormInput>
            <FormInput  type="tel" 
                                value={empPhone} 
                                onChange={(ev)=>setEmpPhone(ev.target.value)}
                                placeholder="Phone Number"
                                required>
                                </FormInput>                 
            {admPermission && <FormInput  type="submit" 
                                className="submit"
                                value="Submit">
                                </FormInput>}   
        </EmployeeFormWrapper>
    ) // end of main return
}

export default AddEmployeeForm;