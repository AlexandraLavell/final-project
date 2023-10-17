import React, { useContext } from "react";

// context
import MainContext from "../MainContext";

// style
import {    ErrorWrapper, 
            MessageWrapper,
            HomeNavLink,
        }  from "./StyledErrorPage";

// main component
const ErrorPage = () => {

    // consume context
    const { errorMessage } = useContext(MainContext);

    // start of main return
    return (
        <ErrorWrapper > 
            <MessageWrapper>{errorMessage}</MessageWrapper>
            <HomeNavLink to="/">Click here</HomeNavLink>
        </ErrorWrapper>
    ) // end of main return
}

export default ErrorPage;