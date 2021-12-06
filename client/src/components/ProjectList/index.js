import React from "react";


import { ProjectListWrapper } from "./StyledProjectList";


const ProjectList = (props) => {   
    
    const drop = (ev) => {        
        ev.preventDefault();

        const card_id = ev.dataTransfer.getData("card_id");
        const card_class = ev.dataTransfer.getData("card_class");

        // use includes instead of "===" because the class name also has automatic extra junk
        if (card_class.includes("projectCard")){

            const projectCard= document.getElementById(card_id);

            projectCard.style.display = "block";

            ev.target.appendChild(projectCard);
        }
    }
    
    const dragOver = (ev) => {
        // allows the card to appear on drop. Default is to disappear.
        ev.preventDefault();
    }

    // start of main return
    return (
        <ProjectListWrapper
                    id={props.id}
                    onDrop={drop}
                    onDragOver={dragOver}
                    className={props.className}
                    >
            { props.children }
        </ProjectListWrapper>
    ) // end of main return
    
}

export default ProjectList;