import React from "react";
import {
      BrowserRouter as Router,
      Route,
      Switch,
      NavLink,
} from "react-router-dom";

// style

// assets

// components
import MainAdminDashBoard from "./MainAdminDashboard";
import MainEmployeeDashBoard from "./MainEmploeeDashboard";
import MainProjectDashBoard from "./MainProjectDashboard";



const App = () => {
  return (
    <AppContainer>
      <Router>
        <EmployeeList></EmployeeList>
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
        <ProjectList></ProjectList>
      </Router>
    </AppContainer>
  );
}

export default App;
