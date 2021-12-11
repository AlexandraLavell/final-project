import React, {useContext} from "react";


// context
import MainContext from "../MainContext";

// style
import { FooterWrapper } from "./StyledFooter";


const Footer = () => {

    // consume context
    const { joke } = useContext(MainContext)


    // start of main return
    return (
        <FooterWrapper>

            <p>{joke}</p>

        </FooterWrapper>

    )


}

export default Footer;