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
    background-image: url("montreal_sunrise.jpg");
    background-size: 100% 100%;  
    /* background-color: black; */
`;

export const ShadowPopSpan = styled.span`
    text-shadow: 0 0 100px #fffacd;
    /* -3px 7px 42px #fffacd; */
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
    width: 17%;
    padding: 4px;
    background-color: black; 
    box-shadow:0 0 100px #fffacd;
    font-size: 3em;
    font-weight: bold;
    text-decoration: none;
    border-radius: 0;
    color: lemonchiffon;
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
        background: lemonchiffon;
        box-shadow: none;
        color: black;
    }
`;

export const FormInput = styled.input`
    position: relative;
    height: 1.1em;
    width: 80%;
    margin: 2px;
    display: flex;
    border: 1px solid lemonChiffon;
    background: black;
    border-radius: 0px;
    font-family: var(--font-main);
    color: lemonChiffon;
    font-size: 0.8em;
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
    width: 17%;
    padding: 4px; 
    background-color: black;       
    box-shadow:0 0 100px #fffacd;    
    /* font-size: .2em; */
    color: lemonChiffon;
    /* border-top: 1px solid black; */
`;