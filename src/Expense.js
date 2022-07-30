import React, {useContext, useState, useEffect} from 'react';

import { DataAppContext } from './DataApp';


const Expense = () => {
    const localAppData = useContext(DataAppContext);
    const [expenseList, setExpenseList] = useState([]);
    const [nameexpense, setNameexpense] = useState('');
    const [amountexpense, setAmountexpense] = useState(0);
    const updateName = (e) => {
        setNameexpense(e.target.value)
    }
    const updateAmount = (e) => {
        setAmountexpense(e.target.value)
    }
    const subIncome = () => {
        setExpenseList([...expenseList, {id: 'expense', name: nameexpense, amount: amountexpense}]);
        localAppData.subBalance(amountexpense);
        setNameexpense('');
        setAmountexpense(0);
    }
    useEffect(() => {
        console.log(expenseList);
    })
    return(
        <>
        <div>
            <div>
                <h4>Add Expense</h4>
            </div>
        </div>
        <div>
            <div>
                <input type="text" value={nameexpense} onChange={updateName}/>
                <input type="number" value={amountexpense} onChange={updateAmount}/>
                <button onClick={subIncome}>Add Expense</button>
            </div>
        </div>
        <div>
            <div>
                <h4>List of expense</h4>
                     {expenseList && expenseList.map((item) => (
                    <div>{item.name } - {item.amount}</div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Expense;

