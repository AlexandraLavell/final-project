import React from "react";

// style
import { AdminDashWrapper }  from "./StyledMainAdminDashboard";



const MainAdminDashboard = (props) => {

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
        <AdminDashWrapper
                    id={props.id}
                    onDrop={drop}
                    onDragOver={dragOver}
                    className={props.className}
                    >
            { props.children }
            main admin background
        </AdminDashWrapper>





    ) // end of main return





}

export default MainAdminDashboard;