import React, {useContext} from "react";

//context
import MainContext from "../MainContext";


// styled components
import { EmployeeCardWrapper } from "./StyledEmployeeCard";



const EmployeeCard = (props) => {

    // consume context
    const { employeeList } = useContext(MainContext);

    const dragStart = (ev) => {
        const target = ev.target;
        ev.dataTransfer.setData("card_id", target.id);
        ev.dataTransfer.setData("card_class", target.className);

        // setTimeout(() =>{
        //     target.style.display = "none";
        // },0);
    }

    // prevents extra card pickup
    const dragOver = (ev) => {
        ev.stopPropagation();
    }

    // changes style back to block when dropped. Used for drops outside of dropzone
    const dragEnd = (ev) => {
        console.log("DROPPED");

        const target = ev.target;        
        
        target.style.display = "block";
    }


    // start of main return
    return (

        <EmployeeCardWrapper
            id={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
            onDragEnd={dragEnd}
        >
            { props.children }
        </EmployeeCardWrapper>




    ) // end of main return





}

export default EmployeeCard;