import React, { useState } from 'react';


const DataAppContext = React.createContext();


const DataApp = (props) => {
    const [appstate, setAppState] = useState();

    const addBalance = (temp) => {
        console.log('temp', temp, typeof(temp))
        setAppState({...appstate, balanceAmount: appstate.balanceAmount + parseInt(temp)});
    }
    const subBalance = (temp) => {
        console.log('temp', temp, typeof(temp))
        setAppState({...appstate, balanceAmount: appstate.balanceAmount - parseInt(temp)});
    }

    return(
        <DataAppContext.Provider value={{appstate,  addBalance, subBalance}}>
            <div className='container app-wrapper'>
                {props.children}
            </div>
        </DataAppContext.Provider>
    )
}

export default DataApp;

export {DataAppContext};