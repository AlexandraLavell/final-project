import {useState, useEffect} from "react";


const usePersistedState = (name, defaultValue) => {

        //checks the local storage to retrieve the last value, if there is nothing there it uses the default value
        const [param, setParam] = useState(() => {const persistParam = window.localStorage.getItem(name); 
        return persistParam !== null ? JSON.parse(persistParam) : defaultValue;

    });


    useEffect(() => {
        //updates every time the parameter or it's name changes
        window.localStorage.setItem(name, JSON.stringify(param));

    }, [param, name])


    // main return
    return [param, setParam];
        
}

export default usePersistedState;