// style
import styled from "styled-components";

// pie charts
import { PieChart } from "react-minimal-pie-chart";

export const AdminDashWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    padding: 15px;
    background: var(--color-main-yellow);
    font-family: var(--font-main);
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

// pie charts
export const PieChartWrapper = styled.div`
    position: absolute;
    top: 0px;
    padding: 0;
    margin: 0;

`;