import React, { useContext } from "react";

// styled components
import {    SignInWrapper,
            Greeting,
            GoToButton,
            SignInForm,
            FormInput,
            FormLabel  } from "./StyledSignIn";

// context
import MainContext from "../MainContext";

const SignIn = () => {

    // consume context
    const { signInPage, setSignInPage,
            setPermission,
            } = useContext(MainContext);

    const handleSubmit = (ev) => {
        setPermission(true);
    }

    // main return
    return (
        <SignInWrapper>
            <Greeting>
                <p>Good</p>
                <p>Morning.</p>
                {!signInPage && <GoToButton type="button" 
                            onClick={() => setSignInPage(true)}
                            value="ready"
                            className="pointer"
                />}
                {signInPage && <SignInForm onSubmit={handleSubmit}>
                    <FormLabel><p>user</p><p>name</p>
                        <FormInput type="text" />
                    </FormLabel>
                    <FormLabel><p>pass</p><p>word</p>
                        <FormInput type="text" />
                    </FormLabel>
                    <GoToButton type="submit"                             
                                value="go"
                                className="pointer go"
                    />
                </SignInForm>}
            </Greeting>
        </SignInWrapper>
    ) // end of main return

}

export default SignIn;