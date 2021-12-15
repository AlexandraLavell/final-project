import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

//  style
import styled from "styled-components";

// styled components
import {    SignInWrapper,
            Greeting,
            ShadowPopSpan,
            GoToButton,
            SignInForm,
            FormInput,
            FormLabel  } from "./StyledSignIn";

// context
import MainContext from "../MainContext";


// circular progress
import CircularProgress from "@material-ui/core/CircularProgress";

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

        console.log("IN HANDLE SUBMIT");

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
                            
            // if (permission && username === "adm"){
            //     setAdmPermission(true);
            // }
            // if (permission && username === "emp"){
            //     setEmpPermission(true);
            // }

            if(
                !permission
                || !empPermission
                || !admPermission
            ){  return (
                            <CircularProgressWrapper>
                                <CircularProgress color="primary"/>
                            </CircularProgressWrapper>                    
                        )                    
            }
    
    }

    // main return
    return (
        <SignInWrapper>
            <Greeting>
                <p><ShadowPopSpan>Go</ShadowPopSpan>od</p>
                <p><ShadowPopSpan>Mor</ShadowPopSpan>ning.</p>
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

const CircularProgressWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
`;


export default SignIn;