import { NavLink } from "react-router-dom";

// style 
import styled from "styled-components";


export const SignInWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 2%;
    background-color: var(--color-main-yellow);
`;

export const Greeting = styled.div`
    font-family: "Courier New";
    font-size: 256px;
    font-weight: bold;
`;

export const GoToButton = styled.input`
    position: absolute;
    bottom: 15px;
    right: 15px;
    height: 1.5em;
    width: 15%;
    padding: 4px;
    background-color: black;   
    font-size: 3em;
    font-weight: bold;
    text-decoration: none;
    border-radius: 0;
    color: var(--color-main-yellow);
    &.pointer{
        cursor: pointer;
    }
    &.go{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        right:0;
        bottom: 0;
        height: 1.5em;
        width: 100%;
        padding: 0;
        margin: 3% 0 0 0;
        font-size: 3em;
        background: var(--color-main-yellow);
        color: black;
    }
`;

export const FormInput = styled.input`
    position: relative;
    height: 1em;
    width: 80%;
    display: flex;
    border: 1px solid var(--color-main-yellow);
    background: black;
    border-radius: 0px;
    font-family: var(--font-main);
    color: var(--color-main-yellow);
    font-size: 1em;
    text-align: center;    
`;

export const FormLabel = styled.div`
    position: relative;
    display: flex;  
    flex-direction: column; 
    align-items: center; 
    font-size: 3em;
`

export const SignInForm = styled.form`
    position: absolute;
    bottom: 5px;
    right: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
    width: 15%;
    padding: 4px;
    background-color: black;    
    /* font-size: .2em; */
    color: var(--color-main-yellow);
    /* border-top: 1px solid black; */
`;