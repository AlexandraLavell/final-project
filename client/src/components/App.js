import React, { useContext } from "react";
import {
      BrowserRouter as Router,
      Route,
      Switch,
      NavLink,
} from "react-router-dom";

// style
import styled from "styled-components";


// components
import SignIn from "./SignIn";
import MainAdminDashBoard from "./MainAdminDashboard";
import MainEmployeeDashBoard from "./MainEmployeeDashboard";
import MainProjectDashBoard from "./MainProjectDashboard";
import DashNavigation from "./DashNavigation";
import EmployeeList from "./EmployeeList";
import ProjectList from "./ProjectList";
import Header from "./Header";
import Footer from "./Footer";

// context
import MainContext from "./MainContext";



const App = () => {

  // consume context
  const { signInPage, setSignInPage } = useContext(MainContext);

  return (
    <Router>  
    {signInPage ?
    <SignIn /> :
    <AppContainer>
      <Header />            
        <ComponentContainer>  
          <EmployeeList id="board-1" className="employeeBoard" />
          <DashWrapper>
            <DashNavigation />
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
            </DashWrapper>
            <ProjectList id="board-2" className="projectBoard" />   
        </ComponentContainer>
      <Footer />        
    </AppContainer>}
  </Router>  
  );
}

export default App;


const AppContainer = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100%;
  background-image: url("garden.jpg");
  background-color: lemonchiffon;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ComponentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  row-gap: 5px;
  background-color: yellow;
  width: 100%;
  margin: 10% 5%;
`;

const DashWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;