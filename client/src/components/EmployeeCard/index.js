import React from "react";

// styled components
import { CardWrapper } from "./StyledEmployeeCard";

// main component
const EmployeeCard = (props) => {    

    const dragStart = (ev) => {
        const target = ev.target;
        ev.dataTransfer.setData("card_id", target.id);
        ev.dataTransfer.setData("card_class", target.className);
    }

    // prevents extra card pickup
    const dragOver = (ev) => {
        ev.stopPropagation();
    }

    // changes style back to block when dropped. Used for drops outside of dropzone
    const dragEnd = (ev) => {
        const target = ev.target;  
        target.style.display = "block";
    }

    // start of main return
    return (
        <CardWrapper
            id={props._id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
            onDragEnd={dragEnd}
        >
            { props.children }
        </CardWrapper>
    ) // end of main return
}

export default EmployeeCard;