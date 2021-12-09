import React, { useContext } from "react";

// context
import MainContext from "../MainContext";

// style
import {    ErrorWrapper, 
            MessageWrapper,
        }  from "./StyledErrorPage";



const ErrorPage = () => {

    // consume context
    const { errorMessage } = useContext(MainContext);

    // start of main return
    return (
        <ErrorWrapper > 
            <MessageWrapper>{errorMessage}</MessageWrapper>
        </ErrorWrapper>
    ) // end of main return
}

export default ErrorPage;