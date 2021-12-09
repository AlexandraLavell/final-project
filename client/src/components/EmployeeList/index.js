import React,{ useContext } from "react";

// context
import MainContext from "../MainContext";

// style
import { EmployeeListWrapper } from "./StyledEmployeeList";

// componenets
import EmployeeCard from "../EmployeeCard";



const EmployeeList = (props) => {

    // consume context
    const { employeeList } = useContext(MainContext);

    console.log("EMPLOYEE LIST ", employeeList);

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
        console.log("LEAVING");

        // const card_id = ev.dataTransfer.getData("card_id");
        // const card_class = ev.dataTransfer.getData("card_class");

        // // use includes instead of "===" because the class name also has automatic extra junk
        // if (card_class.includes("employeeCard")){

        //     const employeeCard= document.getElementById(card_id);

        //     employeeCard.style.display = "block";

        //     ev.target.appendChild(employeeCard);
        // }

    }

    // start of main return
    return (
        <EmployeeListWrapper
                    id={props.id}
                    onDrop={drop}
                    onDragOver={dragOver}
                    onDragLeave={dragLeave}
                    className={props.className}
                    >
            { props.children }
            {employeeList.map((emp) => {
                return  (<EmployeeCard id={emp._id} className="employeeCard" draggable="true" >
                        <p>{emp._id}</p>
                        <p>{emp.firstName} {emp.lastName}</p>
                        </EmployeeCard>)
            })}
        </EmployeeListWrapper>
    ) // end of main return





}

export default EmployeeList;