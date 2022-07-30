import React, { Component, useState, useContext} from "react";
import Income from './Income';
import Expense from './Expense';

import {DataAppContext} from './DataApp';

const ExpenseTracker = () => {
    const localAppData = useContext(DataAppContext);
    return(
        <>
        <div>
            <div>
                <h2>Expense Tracker</h2>
            </div>
            <div>
                {/* <h2>Balance - {localAppData.appstate.amount}</h2> */}
            </div>
        </div>

        <div>
            <div>
                <Income />
            </div>
            <div>
                <Expense />
            </div>
        </div>
        </>
    )
}

export default ExpenseTracker;