import React, { useContext } from "react";

// context
import MainContext from "../MainContext";

// style
import { EmployeeDashWrapper }  from "./StyledMainEmployeeDashboard";

const MainEmployeeDashboard = (props) => {

    // consume context
    const { employeeList, currentEmployee, setCurrentEmployee } = useContext(MainContext);

    const drop = (ev) => {      
        ev.preventDefault();

        const card_id = ev.dataTransfer.getData("card_id");
        const card_class = ev.dataTransfer.getData("card_class");

        // use includes instead of "===" because the class name also has automatic extra junk
        if (card_class.includes("employeeCard")){

            setCurrentEmployee(card_id);

            // const card= document.getElementById(card_id);

            // console.log("ELEMENT BY ID ", card);

            // card.style.display = "block";

            // ev.target.appendChild(card);

        } else if (card_class.includes("projectCard")){

            const card= document.getElementById(card_id);

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
        <EmployeeDashWrapper
                    id={props.id}
                    onDrop={drop}
                    onDragOver={dragOver}
                    className={props.className}
                    >
            { props.children }
            <p>{currentEmployee}</p>

        </EmployeeDashWrapper>
    ) // end of main return





}

export default MainEmployeeDashboard;