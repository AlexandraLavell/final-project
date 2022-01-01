

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
`;

export const ShadowPopSpan = styled.span`
    text-shadow: 0 0 100px #fffacd;
`;

export const DotSpan = styled.span`
    margin-left: -10px;    
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
    min-width: 25%;
    padding: 4px;
    background-color: black; 
    box-shadow:0 0 100px #fffacd;
    font-size: 2em;
    font-weight: bold;
    text-decoration: none;
    border-radius: 0;
    color: lemonchiffon;
    &:hover{
        color: pink;
        transition: 2s;
    }
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
        font-size: 2em;
        background: lemonchiffon;
        box-shadow: none;
        color: black;
        &:hover{
        background: pink;
        transition: 2s;
    }
    }
`;

export const FormInput = styled.input`
    position: relative;
    max-height: 1.1em;
    max-width: 100%;
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
    max-width: 80%; 
    flex-direction: column; 
    align-items: center; 
    font-size: 2em;
    font-weight: bold;
`;

export const SignInForm = styled.form`
    position: absolute;
    bottom: 5px;
    right: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;    
    padding: 4px; 
    background-color: black;       
    box-shadow:0 0 100px #fffacd; 
    color: lemonChiffon;
`;

export const CloseButton = styled.button`
    justify-self: flex-start;
    align-self: flex-end;
    max-height: 5%;
    max-width: 10%;
    background: transparent;
    border: none;
    padding: none;
    margin-right: 15px;
    cursor: pointer;
    &:hover{
        color: pink;
        transition: 2s;
    }
`;