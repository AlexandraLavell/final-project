import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

// context
import MainContext from "../MainContext";

// style
import {    EmployeeFormWrapper, 
            FormInput,
            SubsectionHeader,
        } from "./StyledAddEmployeeForm";

const AddEmployeeForm = () => {

    // consume context
    const { setNewEmployee, admPermission } = useContext(MainContext);

    // history for move after submit
    const history = useHistory();
    
    // local state variables
    const [ empNumber, setEmpNumber ] = useState();
    const [ empFirstName, setEmpFirstName ] = useState();
    const [ empLastName, setEmpLastName ] = useState();
    const [ empPhone, setEmpPhone ] = useState();
    const [ empEmail, setEmpEmail ] = useState();   

    const handleSubmit = (ev) => {
        ev.preventDefault();
        
        setNewEmployee({
                        "_id": empNumber,
                        "firstName": empFirstName,
                        "lastName": empLastName,
                        "email": empEmail,
                        "phone": empPhone,
                    }); 
        history.push("/dash");
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
                                value="Submit">
                                </FormInput>}   
        </EmployeeFormWrapper>




    ) // end of main return



}

export default AddEmployeeForm;