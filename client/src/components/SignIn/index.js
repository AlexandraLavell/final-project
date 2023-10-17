import React, { useContext, useState } from "react";
import { redirect } from "react-router-dom"

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
            setPermission,
            setAdmPermission,
            setEmpPermission,
            setErrorMessage,
            } = useContext(MainContext);

    // redirect for error page
    

    const handleUsernameChange = (ev) => {
        setUsername(ev.target.value);
    }

    const handlePasswordChange = (ev) => {
        setPassword(ev.target.value);
    }

    
    const handleSubmit = (ev) => {
        ev.preventDefault();

        // local fetch to check username and password
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
                            if (data.data && (username === "adm")){
                                setAdmPermission(true);
                            }
                            if (data.data && (username === "emp")){
                                setEmpPermission(true);
                            }
                            if(!data.data){
                                window.alert("Please try again");
                            }
            })
            .catch((err) => {
                                setErrorMessage(err);
                                redirect("/error");
                            });                               
        }

        const handleKeypress = (ev) => {      
            // keyCode 13 is the enter key 
            // ref: https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/   
            if (ev.keyCode === 13) {      
                // pass the event to handleSubmit
                handleSubmit(ev);    
            }  
        };

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
                    <CloseButton onClick={()=>{setSignInPage(false);
                                                setUsername();
                                                setPassword();
                                                }}><FiMinus/></CloseButton>
                    <FormLabel><p>username</p>
                        <FormInput  type="text" 
                                    value={username}
                                    onChange={handleUsernameChange}/>
                    </FormLabel>
                    <FormLabel><p>password</p>
                        <FormInput  type="password" 
                                    value={password}
                                    onChange={handlePasswordChange}
                                    onKeyDown={handleKeypress}
                                    />
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