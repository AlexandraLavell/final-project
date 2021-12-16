import React, { useContext } from "react";

// context
import MainContext from "../MainContext";

// style
import {    ProjectContainerWrapper,
            SubsectionHeader,
            AddNav,
            ProjectListWrapper } from "./StyledProjectList";

// components
import ProjectCard from "../ProjectCard";

// assets
import { FiPlus } from "react-icons/fi"


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
        <ProjectContainerWrapper>
            <SubsectionHeader><p>Projects</p><AddNav exact to="/addProject"><FiPlus/></AddNav></SubsectionHeader>
            <ProjectListWrapper
                        id={props.id}
                        onDrop={drop}
                        onDragOver={dragOver}
                        className={props.className}
                        >
                { props.children }
                {projectList.map((prj) => {
                    return  (<ProjectCard _id={prj._id} className="projectCard" draggable="true" alertFlag={prj.approval==="pending"} >
                                <p>{prj._id}</p>
                                <p>{prj.project_name}</p>
                                <p>{prj.approval}</p>
                            </ProjectCard>)
                })}
            </ProjectListWrapper>
        </ProjectContainerWrapper>
    ) // end of main return
}

export default ProjectList;