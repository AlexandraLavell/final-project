import React, { useState, useEffect } from "react";

import { HeaderWrapper } from "./StyledHeader";


const Header = () => {

    const [show, setShow] = useState(false)

    const handleScroll = () => {

        if (window.scrollY > 200){
            setShow(false);
        } else {
            setShow(true);
        }
    }

    useEffect(()=>{

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
        
    },[]);


    // start of main return
    return (
        <HeaderWrapper className={show && "blue"}>

            <p>Header</p>

        </HeaderWrapper>

    ) //end of main return
}

export default Header;