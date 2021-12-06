import React from "react";

// style
import { ProjectDashWrapper }  from "./StyledMainProjectDashboard";



const MainProjectDashboard = (props) => {

    const drop = (ev) => {        

        ev.preventDefault();

        console.log("DROP ON PROJECT DASH", ev.target.className);

        const card_id = ev.dataTransfer.getData("card_id");
        const card_class = ev.dataTransfer.getData("card_class");

        console.log("GET CLASS DATA", card_class);
        console.log("GET ID DATA ", card_id);

        // use includes instead of "===" because the class name also has automatic extra junk
        if (card_class.includes("employeeCard")){

            const card= document.getElementById(card_id);

            console.log("ELEMENT BY ID ", card);

            card.style.display = "block";

            ev.target.appendChild(card);
        } else if (card_class.includes("projectCard")){

            const card= document.getElementById(card_id);

            console.log("ELEMENT BY ID ", card);

            card.style.display = "block";

            ev.target.appendChild(card);
        }
    }

    const dragOver = (ev) => {
        // allows the card to appear on drop. Default is to disappear.
        ev.preventDefault();
    }

    // start of main return
    return (
        <ProjectDashWrapper
                    id={props.id}
                    onDrop={drop}
                    onDragOver={dragOver}
                    className={props.className}
                    >
            { props.children }
            main project background
        </ProjectDashWrapper>
    ) // end of main return
}

export default MainProjectDashboard;