import React, { useState }  from 'react';
import { Form , Button} from 'react-bootstrap';



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

const onChangeInput = () =>{};
const handleSelect = () =>{};
const handleSwap = () =>{};
    return (
       <div>
         <h3 className='text-center'>Currency Converter</h3>
         <div className='currency-form-wrap'>
           <div>
           <label for="ammount">Ammount To Convert</label>
           <Form.Control type="number" value={ammount} onChange={onChangeInput}  />
           </div>
           <div>
           <label for="from">From:</label>
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
           <label for="to">To:</label>
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
           <label for="Result">Result: </label>
           <Form.Control type="text" disabled={true} value={ammount === "" ? "0" : result === null ? "calculating.." : result} />
           </div>
         </div>
       </div>
    )
  }



export default CurrencyConverter
