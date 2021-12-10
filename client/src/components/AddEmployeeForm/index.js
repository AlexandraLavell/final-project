import React, { useState, useContext } from "react";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

// style
import {    EmployeeFormWrapper, 
            EmployeeFormInput,
            SubsectionHeader,
        } from "./StyledAddEmployeeForm";

const AddEmployeeForm = () => {
    
    // local state variables
    const [ dates, setDates ] = useState([]);
    const [ empNumber, setEmpNumber ] = useState();
    const [ empFirstName, setEmpFirstName ] = useState();
    const [ empLastName, setEmpLastName ] = useState();
    const [ empPhone, setEmpPhone ] = useState();
    const [ empEmail, setEmpEmail ] = useState();   


    // start main return
    return(
        <EmployeeFormWrapper>
            <SubsectionHeader>Add Employee </SubsectionHeader>
            <EmployeeFormInput  type="text" 
                                value={empNumber} 
                                onChange={(ev)=>setEmpNumber(ev.target.value)}
                                placeholder="Employee Number">                                    
                                </EmployeeFormInput>
            <EmployeeFormInput  type="text" 
                                value={empFirstName} 
                                onChange={(ev)=>setEmpFirstName(ev.target.value)}
                                placeholder="First Name">
                                </EmployeeFormInput>
            <EmployeeFormInput  type="text" 
                                value={empLastName} 
                                onChange={(ev)=>setEmpLastName(ev.target.value)}
                                placeholder="Last Name">
                                </EmployeeFormInput>
            <EmployeeFormInput  type="email" 
                                value={empEmail} 
                                onChange={(ev)=>setEmpEmail(ev.target.value)}
                                placeholder="Email">
                                </EmployeeFormInput>
            <EmployeeFormInput  type="tel" 
                                value={empPhone} 
                                onChange={(ev)=>setEmpPhone(ev.target.value)}
                                placeholder="Phone Number">
                                </EmployeeFormInput>                 
            <EmployeeFormInput  type="submit" 
                                value="Submit">
                                </EmployeeFormInput>   
            <EmployeeFormInput  type="reset" >
                                </EmployeeFormInput>   
        </EmployeeFormWrapper>




    ) // end of main return



}

export default AddEmployeeForm;