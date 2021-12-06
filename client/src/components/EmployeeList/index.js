import React from "react";

import { EmployeeListWrapper } from "./StyledEmployeeList";



const EmployeeList = (props) => {

    // 
    const drop = (ev) => {        
        ev.preventDefault();

        const card_id = ev.dataTransfer.getData("card_id")

        const card= document.getElementById(card_id);

        card.style.display = "block";

        ev.target.appendChild(card);

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