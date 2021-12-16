import React, {useContext} from "react";

// context
import MainContext from "../MainContext";

// style
import {    FooterWrapper,
            SignoutNavLink,
        } from "./StyledFooter";

// main component
const Footer = () => {

    // consume context
    const {    joke,
                setPermission,
                setAdmPermission,
                setEmpPermission,
            } = useContext(MainContext);


    // start of main return
    return (
        <FooterWrapper>
            <p>{joke}</p>
            <SignoutNavLink onClick={()=>{
                                            setPermission(false);
                                            setAdmPermission(false);
                                            setEmpPermission(false);
                                            }}
                            exact to="/">signout</SignoutNavLink>

        </FooterWrapper>
    )
}

export default Footer;