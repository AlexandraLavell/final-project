import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

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

    // local state variable for the form
    const [ username, setUsername ] = useState();
    const [ password, setPassword ] = useState();

    // consume context
    const { signInPage, setSignInPage,
            setPermission,
            setErrorMessage
            } = useContext(MainContext);

    // history for error page
    const history = useHistory();

    const handleUsernameChange = (ev) => {
        setUsername(ev.target.value);
    }

    const handlePasswordChange = (ev) => {
        setPassword(ev.target.value);
    }

    // local fetch to check username and password
    const handleSubmit = (ev) => {
        ev.preventDefault();

        fetch(`/users/${username}`, {
            method: "POST",
            headers: {
                Accept: "application/json",// response type
                "Content-Type": "application/json", //send type of the body
                },
            body: JSON.stringify({"password":password}),
            })
            .then(res => res.json())
            .then(data => {
                            console.log(data.data);
                            setPermission(data.data);
            })
            .catch((err) => {
                                setErrorMessage(err);
                                history.push("/error");
                            });               
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
                        <FormInput  type="text" 
                                    value={username}
                                    onChange={handleUsernameChange}/>
                    </FormLabel>
                    <FormLabel><p>pass</p><p>word</p>
                        <FormInput  type="password" 
                                    value={password}
                                    onChange={handlePasswordChange}/>
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