import React, { useState, 
                useEffect, 
                useReducer 
            } from "react";
import { useHistory } from "react-router-dom";

// circular progress
// import CircularProgress from "@material-ui/core/CircularProgress";

// style
import styled from "styled-components";

export const MainContext = React.createContext(null);

export const MainContextProvider = ({children}) => {

    return <MainContext.Provider value={{}}></MainContext.Provider>
}

export default MainContext;