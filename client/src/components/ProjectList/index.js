import React, { useContext } from "react";

// context
import MainContext from "../MainContext";

// style
import { ProjectListWrapper } from "./StyledProjectList";

// components
import ProjectCard from "../ProjectCard";

const ProjectList = (props) => {
    
    // consume context
    const { projectList } = useContext(MainContext);
    
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
            {projectList.map((prj) => {
                return  (<ProjectCard id={prj} className="projectCard" draggable="true" >
                        <p>{prj}</p>
                        </ProjectCard>)
            })}
        </ProjectListWrapper>
    ) // end of main return
}

export default ProjectList;