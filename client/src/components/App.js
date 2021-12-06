import React from "react";
import {
      BrowserRouter as Router,
      Route,
      Switch,
      NavLink,
} from "react-router-dom";

// style
import styled from "styled-components";


// components
import MainAdminDashBoard from "./MainAdminDashboard";
import MainEmployeeDashBoard from "./MainEmploeeDashboard";
import MainProjectDashBoard from "./MainProjectDashboard";
import EmployeeList from "./EmployeeList";
import EmployeeCard from "./EmployeeCard";
import ProjectList from "./ProjectList";
import Header from "./Header";
import Footer from "./Footer";



const App = () => {
  return (
    <AppContainer>
      <Header />
      <Router>
      <EmployeeList id="board-1" className="board">
        <EmployeeCard id="card-1" className="card" draggable="true" >
          <p>Card One</p>
        </EmployeeCard>
      </EmployeeList>      
        <Switch>
          <Route exact path="/">            
            <MainAdminDashBoard />
          </Route>
          <Route exact path="/employee">            
            <MainEmployeeDashBoard />
          </Route>
          <Route exact path="/project">            
            <MainProjectDashBoard />
          </Route>
        </Switch>
        <EmployeeList id="board-2" className="board">
        <EmployeeCard id="card-2" className="card" draggable="true" >
          <p>Card Two</p>
        </EmployeeCard>
      </EmployeeList>
        {/* <ProjectList></ProjectList> */}
      </Router>
      <Footer />
    </AppContainer>
  );
}

export default App;


const AppContainer = styled.div`
  position: relative;
  display: flex;
  height: 200vh;
  width: 100%;
  background-image: url("garden.jpg");
  background-color: lemonchiffon;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;