import React from "react";

import { EmployeeListWrapper } from "./StyledEmployeeList";



const EmployeeList = (props) => {

    // 
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

    // start of main return
    return (
        <EmployeeListWrapper
                    id={props.id}
                    onDrop={drop}
                    onDragOver={dragOver}
                    className={props.className}
                    >
            { props.children }
        </EmployeeListWrapper>
    ) // end of main return





}

export default EmployeeList;