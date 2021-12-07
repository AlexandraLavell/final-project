import React from "react";

import {    SignInWrapper,
            Greeting,
            GoToButton  } from "./StyledSignIn";


const SignIn = () => {


    // main return
    return (
        <SignInWrapper>
            <Greeting>
                <p>Good</p>
                <p>Morning</p>
                <GoToButton exact to="/dash"></GoToButton>
            </Greeting>
        </SignInWrapper>
    ) // end of main return

}

export default SignIn;