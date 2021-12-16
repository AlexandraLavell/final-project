// style
import styled from "styled-components";

export const AdminDashWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 15px;
    background: var(--color-main-yellow);
`;

export const SubsectionHeader = styled.div`    
    height: fit-content;
    width: fit-content;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-content: center
    color:black;
    font-size: 1.2em
    font-family: var(--font-main);    
    padding: 8px;
    background: var(--color-main-yellow);
`;

// tree chart
export const TreeChartWrapper = styled.div`
    position: relative;   
    height:30%;
    width:100%;  
`;

// pie charts
export const PieChartWrapper = styled.div`
    position: relative;
    height:30%;
    width:60%;  
`;

export const MultipleListContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;    
    width: 100%;
`;

export const ListWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    max-width: 40%;
`;

export const ItemList = styled.div`  
    padding: 3px;
    margin: 3px;
`;

export const ListNumber = styled.div`
    padding: 3px;
    margin: 3px;
    font-size: 1.5em;    
`;
