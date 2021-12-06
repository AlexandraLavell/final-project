import React from "react";

import { EmployeeCardWrapper } from "./StyledEmployeeCard";



const EmployeeCard = (props) => {

    const dragStart = (ev) => {
        const target = ev.target;
        ev.dataTransfer.setData("card_id", target.id);

        setTimeout(() =>{
            target.style.display = "none";
        },0);
    }

    const dragOver = (ev) => {
        ev.stopPropagation();
    }


    // start of main return
    return (

        <EmployeeCardWrapper
            id={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
        >
            { props.children }
        </EmployeeCardWrapper>




    ) // end of main return





}

export default EmployeeCard;