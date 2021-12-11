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
import AddEmployeeForm from "./AddEmployeeForm";
import ProjectList from "./ProjectList";
import AddProjectForm from "./AddProjectForm";
import Header from "./Header";
import Footer from "./Footer";
import ErrorPage from "./ErrorPage";

// context
import MainContext from "./MainContext";



const App = () => {

  // consume context
  const { signInPage, setSignInPage } = useContext(MainContext);

  return (
    <>
    // <Router>  
    {false ?
    <SignIn /> :
    <AppContainer>
      <Header />            
        <ComponentContainer>  
          <EmployeeList _id="board-1" className="employeeBoard" />
          <DashWrapper>
            <DashNavigation />
              <Switch>          
                <Route exact path="/dash">            
                  <MainAdminDashBoard />
                </Route>
                <Route exact path="/employee">            
                  <MainEmployeeDashBoard />
                </Route>
                <Route exact path="/project">            
                  <MainProjectDashBoard />
                </Route>    
                <Route exact path="/addEmployee">            
                  <AddEmployeeForm />
                </Route>
                <Route exact path="/addProject">            
                  <AddProjectForm />
                </Route> 
                <Route exact path="/error">            
                  <ErrorPage />
                </Route>                
              </Switch>
            </DashWrapper>
            <ProjectList id="board-2" className="projectBoard" />   
        </ComponentContainer>
      <Footer />        
    </AppContainer>}
  </Router> 
  </> 
  );
}

export default App;


const AppContainer = styled.div`
  position: relative;
  display: flex;
  height: 200vh;
  width: 100%;
  background-image: url("garden.jpg");
  background-color: var(--color-main-yellow);
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const DashWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;