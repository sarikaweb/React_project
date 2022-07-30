import React, { useState } from 'react';


const DataAppContext = React.createContext();


const DataApp = (props) => {
    const initialValues = {balanceAmount: 0}
    const [appstate, setAppState] = useState(initialValues);

  

    const addBalance = (temp) => {
        setAppState({...appstate, balanceAmount: appstate.balanceAmount + parseInt(temp)});
    }
    const subBalance = (temp) => {
        setAppState({...appstate, balanceAmount: appstate.balanceAmount - parseInt(temp)});
    }
  

    return(
      

        <DataAppContext.Provider value={{addBalance, subBalance}}>
            <div>
                {props.children}
             
            </div>
        </DataAppContext.Provider>
        
    )
}

export default DataApp;

export {DataAppContext};