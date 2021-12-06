import React from "react";

import { ProjectCardWrapper } from "./StyledProjectCard";



const ProjectCard = (props) => {

    const dragStart = (ev) => {
        const target = ev.target;
        ev.dataTransfer.setData("card_id", target.id);
        ev.dataTransfer.setData("card_class", target.className);

        setTimeout(() =>{
            target.style.display = "none";
        },0);
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

        <ProjectCardWrapper
            id={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
            onDragEnd={dragEnd}
        >
            { props.children }
        </ProjectCardWrapper>




    ) // end of main return





}

export default ProjectCard;