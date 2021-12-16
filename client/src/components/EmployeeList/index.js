import React,{ useContext } from "react";

// Tippy
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

// context
import MainContext from "../MainContext";

// style
import {    EmployeeContainerWrapper,
            SubsectionHeader,
            AddNav,
            EmployeeListWrapper,
            TippyWrapper,
            TippyContent} from "./StyledEmployeeList";

// componenets
import EmployeeCard from "../EmployeeCard";

// assets
import { FiPlus } from "react-icons/fi"

// main component
const EmployeeList = (props) => {

    // consume context
    const { employeeList,
            admPermission,
        } = useContext(MainContext);
    
    const drop = (ev) => {        
        ev.preventDefault();

        const card_id = ev.dataTransfer.getData("card_id");
        const card_class = ev.dataTransfer.getData("card_class");

        // use includes instead of "===" because the class name also has automatic extra junk
        if (card_class.includes("employeeCard")){
            const employeeCard= document.getElementById(card_id);
            employeeCard.style.display = "block";
            ev.target.appendChild(employeeCard);
        }
    }

    const dragOver = (ev) => {
        // allows the card to appear on drop. Default is to disappear.
        ev.preventDefault();
    }

    const dragLeave = (ev) => {        
        ev.preventDefault();
    }

    // start of main return
    return (
        <EmployeeContainerWrapper>
            <SubsectionHeader>Employees{admPermission && <AddNav exact to="/addEmployee"><FiPlus/></AddNav>}</SubsectionHeader>
            <EmployeeListWrapper
                        _id={props.id}
                        onDrop={drop}
                        onDragOver={dragOver}
                        onDragLeave={dragLeave}
                        className={props.className}
                        >
                { props.children }
                {employeeList.map((emp) => {            
                    // // this generates a list of projects the employee is working on today
                    const keyList = Object.keys(emp.projects);
                    
                    const todaysProjects = [];
                    
                                        keyList.forEach((key) => {
                                            
                                            emp.projects[key].forEach((keyDate) => {                                                

                                                if(((new Date(keyDate)).getDay() === (new Date()).getDay()) 
                                                && ((new Date(keyDate)).getMonth() === (new Date()).getMonth())
                                                && ((new Date(keyDate)).getFullYear() === (new Date()).getFullYear()))
                                                {
                                                    todaysProjects.push(key);
                                                }
                                            })
                                        })   
                    return  (                            
                                <EmployeeCard _id={emp._id} className="employeeCard" draggable="true" >                                
                                    <TippyWrapper content={<div><p>Today: </p><TippyContent>{todaysProjects.toString()}</TippyContent></div>}>
                                        <div>
                                            <p>{emp._id}</p>
                                            <p>{emp.firstName} {emp.lastName}</p> 
                                        </div>
                                    </TippyWrapper>                                
                                </EmployeeCard>                           
                            )
                })}
            </EmployeeListWrapper>
        </EmployeeContainerWrapper>
    ) // end of main return
}

export default EmployeeList;