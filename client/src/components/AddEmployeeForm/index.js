import React, { useState, useContext } from "react";

// style
import {    EmployeeFormWrapper, 
            DateWrapper,
            ProjectDates} from "./StyledAddEmployeeForm";

const AddEmployeeForm = () => {

    const [ dates, setDates ] = useState([]);

    const handleDates = (ev) => {

        setDates([...dates, ev.target.value]);   
        console.log(dates);        

    }


    // start main return
    return(

        <EmployeeFormWrapper>
            <DateWrapper id="datewrapper">
                <ProjectDates type="date" onChange={handleDates} />
                {dates}
            </DateWrapper>
        </EmployeeFormWrapper>




    ) // end of main return



}

export default AddEmployeeForm;