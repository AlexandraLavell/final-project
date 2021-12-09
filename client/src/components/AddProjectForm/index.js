import React, { useState, useContext } from "react";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

// style
import {    ProjectFormWrapper, 
            DateWrapper,
            ProjectDates} from "./StyledAddProjectForm";

const AddProjectForm = () => {
    
    const [ dates, setDates ] = useState([]);

    const handleDates = (ev) => {

        if(dates.includes(ev.target.value)){  
            const newArray = dates.filter((date) => {return date !== ev.target.value});
            setDates(newArray); 
        }else{
            setDates([...dates, ev.target.value]);
            // ev.target.value=0;           
        }   
        console.log(dates);        
    }


    // start main return
    return(

        <ProjectFormWrapper>
            <DateWrapper id="datewrapper">              
                <ProjectDates type="date" value={dates} onChange={handleDates} />
                {dates}
            </DateWrapper>
        </ProjectFormWrapper>




    ) // end of main return



}

export default AddProjectForm;