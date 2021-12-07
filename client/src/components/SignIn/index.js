import React, { useContext } from "react";

// styled components
import {    SignInWrapper,
            Greeting,
            GoToButton  } from "./StyledSignIn";

// context
import MainContext from "../MainContext";

const SignIn = () => {

    // consume context
    const { setSignInPage } = useContext(MainContext);

    // main return
    return (
        <SignInWrapper>
            <Greeting>
                <p>Good</p>
                <p>Morning.</p>
                <GoToButton exact to="/dash" onClick={() => setSignInPage(false)}>ready</GoToButton>
            </Greeting>
        </SignInWrapper>
    ) // end of main return

}

export default SignIn;