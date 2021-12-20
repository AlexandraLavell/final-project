import React, { useState, useEffect } from "react";

// styled components
import {    HeaderWrapper,
            HeaderNavLink,
            MinimizedContentSpan,
        } from "./StyledHeader";

// main component
const Header = () => {

    // local state variables
    const [show, setShow] = useState(false);

    // causes header to go transparent on scroll down
    const handleScroll = () => {
        if (window.scrollY > 150){
            setShow(true);
        } else {
            setShow(false);
        }
    }

    // sets event listener to for scrolling for transparent header
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }        
    },[]);

    // start of main return
    return (
        <HeaderWrapper className={show && "blue"}>            
            <HeaderNavLink exact to="/">G<MinimizedContentSpan className={show && "vert"}>ood</MinimizedContentSpan> M<MinimizedContentSpan className={show && "vert"}>orning.</MinimizedContentSpan></HeaderNavLink>
        </HeaderWrapper>

    ) //end of main return
}

export default Header;