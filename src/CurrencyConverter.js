import React, { useEffect, useState }  from 'react';
import { Form , Button} from 'react-bootstrap';
import axios from 'axios';



const CurrencyConverter = () => {

const [initialState, setState] = useState ({

  currencies: ["USD", "SGD", "PHP", "EUR", "INR"],
  base : "USD",
  ammount: "",
  convertTo: "INR",
  result: "",
  date:"",
})

const {currencies, base, ammount, convertTo, result, date} = initialState;

useEffect(() => {
if(ammount===isNaN){
  return;
} else {
  const getCurrencyconvertTor = async () => {
    const response = await axios.get(
      `https://api.exchangeratesapi.io/latest?base=${base}`
    );
    console.log("response==>", response);
    const date = response.data.date;
    const result = (response.data.rates[convertTo] * ammount).toFixed(3);
    setState({
      ...initialState,
      result,
      date,
    });
  };
  getCurrencyconvertTor();
}
}, [ammount, base, convertTo]);
const onChangeInput = (e) =>{

  setState({
    ...initialState,
    ammount: e.target.value,
    result: null,
    date: null
  });
};
const handleSelect = (e) =>{
  setState({
    ...initialState,
   [e.target.name]: e.target.value,
    result: null,
  });
};
const handleSwap = (e) =>{
e.preventDefault();
  setState({
    ...initialState,
    convertTo: base,
    base: convertTo,
    result: null,
  });
};



    return (
       <div>
         <h3 className='text-center'>Currency Converter</h3>
         <div className='currency-form-wrap'>
           <div>
           <label>Ammount To Convert</label>
           <Form.Control type="number" value={ammount} onChange={onChangeInput}  />
           </div>
           <div>
           <label>From:</label>
           <Form.Select value={base} onChange={handleSelect}>
               {currencies.map((currency) => (
                     <option key={currency} value={currency}>
                      {currency}
                     </option>
               ))}
               </Form.Select>
           </div>
           <div className='upDownArrow'>
             <h1 onClick={handleSwap}>
               &#8595; &#8593;
             </h1>
           </div>
           <div>
           <label>To:</label>
           <Form.Select value={convertTo} onChange={handleSelect}>
               {currencies.map((currency) => (
                     <option key={currency} value={currency}>
                      {currency}
                     </option>
               ))}
               </Form.Select>
           </div>
           <div className='button-grp'>
           <Button variant="success">Convert</Button>{' '}
           </div>
           <div>
           <label>Result: </label>
           <Form.Control type="text" disabled={true} value={ammount === "" ? "0" : result === null ? "calculating.." : result} />
           </div>
         </div>
       </div>
    )
  }



export default CurrencyConverter
