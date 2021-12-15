// style
import styled from "styled-components";

export const ProjectDashWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    padding: 15px;
    background: var(--color-main-yellow);    
    /* border-top: 1px solid black; */
`;
export const ProjectDashForm = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    padding: 15px;
    background: var(--color-main-yellow);
    /* border-top: 1px solid black; */
`;
export const SubsectionHeader = styled.div`    
    height: fit-content;
    display: flex; 
    justify-content: space-between;
    color:black;
    font-family: var(--font-main);
    width: 100%;
    padding: 15px;
    background: var(--color-main-yellow);
    /* border: 1px solid black; */
`;
export const FormInput = styled.input`
    position: relative;
    display: flex;
    border: 1px solid black;
    background: transparent;
    margin: 10px 15px;
    border-radius: 0px;
    &.pointer{
        cursor: pointer;
        &:hover{
            color: lemonchiffon;
            background: black;
            font-weight: bold;
            transition: 2s;
        }
    }
`;
export const FormTextArea = styled.textarea`
    position: relative;
    display: flex;
    border: 1px solid black;
    background: transparent;
    margin: 10px 15px;
    border-radius: 0px;
    font-size: 1em;
`;
export const FormLabel = styled.div`
    position: relative;
    align-self: flex-start;
    display: flex;  
    flex-direction: column; 
    align-items: center; 
    font-size: 1em;
    margin-left: 15px;
    transition: 1s;
`
