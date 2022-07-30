import React, {useState, useEffect, useContext} from 'react';
import { DataAppContext } from './DataApp';

const Income = () => {
    const localAppData = useContext(DataAppContext);
    const [incomeList, setIncomeList] = useState([]);
    const [nameincome, setNameincome] = useState('');
    const [amountincome, setAmountincome] = useState(0);
    const updateName = (e) => {
        setNameincome(e.target.value)
    }
    const updateAmount = (e) => {
        setAmountincome(e.target.value)

    }
    const addIncome = () => {
        setIncomeList([...incomeList, {id: 'income', name: nameincome, amount: amountincome}]);
        localAppData.addBalance(amountincome);
        setNameincome('');
        setAmountincome(0);
    }
    useEffect(() => {
        console.log(incomeList);
    })
    return(
        <>
        <div>
            <div>
                <h4>Add Income</h4>
            </div>
        </div>
        <div>
            <div>
                <input type="text" value={nameincome} onChange={updateName}/>
                <input type="number" value={amountincome} onChange={updateAmount}/>
                <button onClick={addIncome}>Add Income</button>
            </div>
        </div>
        <div>
            <div>
                <h4>List of income</h4>
                {incomeList && incomeList.map((item) => (
                    <div>{item.name } - {item.amount}</div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Income;