import React, { useContext } from "react";
import {
      BrowserRouter as Router,
      Route,
      Switch,
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
  const { permission, empPermission, admPermission } = useContext(MainContext);

  return (    
    <MyRouter> 
     {/* permission to enter and level of permission (employee or administrator)  */}
    {!(permission && (empPermission || admPermission)) ?
    <SignIn /> :
    <AppContainer>
      <Header />            
        <ComponentContainer>  
          <EmployeeList _id="board-1" className="employeeBoard" />
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
                <Route exact path="/addEmployee">            
                  <AddEmployeeForm />
                </Route>
                <Route exact path="/addProject">            
                  <AddProjectForm />
                </Route> 
                <Route path="*">            
                  <ErrorPage />
                </Route>                
              </Switch>
            </DashWrapper>
            <ProjectList id="board-2" className="projectBoard" />   
        </ComponentContainer>
      <Footer />        
    </AppContainer>}
  </MyRouter> 
  
  );
}

export default App;

const AppContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 150vh;
  width: 100%;
  /* background-image: url("background.jpg"); */
  background-color:rgba(223,211,79,0.2); 
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ComponentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  row-gap: 5px;
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

const MyRouter = styled(Router)`
  position: relative;
  height: 100%;
  width: 100%;
`