import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

// context
import MainContext from "../MainContext";

// styled components
import {    SignInWrapper,
            Greeting,
            ShadowPopSpan,
            DotSpan,
            GoToButton,
            SignInForm,
            CloseButton,
            FormInput,
            FormLabel  } from "./StyledSignIn";

// assets
import { FiMinus } from "react-icons/fi"

// main component
const SignIn = () => {

    // local state variable for the form
    const [ username, setUsername ] = useState();
    const [ password, setPassword ] = useState();

    // consume context
    const { signInPage, setSignInPage,
            permission, setPermission,
            admPermission, setAdmPermission,
            empPermission, setEmpPermission,
            setErrorMessage,
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
                            setPermission(data.data);
                            if (data.data && username === "adm"){
                                setAdmPermission(true);
                            }
                            if (data.data && username === "emp"){
                                setEmpPermission(true);
                            }
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
                <p><ShadowPopSpan>Go</ShadowPopSpan>od</p>
                <p><ShadowPopSpan>Mor</ShadowPopSpan><span>ning<DotSpan>.</DotSpan></span></p>
            </Greeting>
                {!signInPage && <GoToButton type="button" 
                            onClick={(ev) => {
                                                ev.stopPropagation();
                                                setSignInPage(true);
                                            }}
                            value="ready"
                            className="pointer"
                />}
                {signInPage && <SignInForm onSubmit={handleSubmit}>
                    <CloseButton onClick={()=>{setSignInPage(false)}}><FiMinus/></CloseButton>
                    <FormLabel><p>username</p>
                        <FormInput  type="text" 
                                    value={username}
                                    onChange={handleUsernameChange}/>
                    </FormLabel>
                    <FormLabel><p>password</p>
                        <FormInput  type="password" 
                                    value={password}
                                    onChange={handlePasswordChange}/>
                    </FormLabel>
                    <GoToButton type="submit"                             
                                value="go"
                                className="pointer go"
                    />
                </SignInForm>}            
        </SignInWrapper>
    ) // end of main return

}

export default SignIn;