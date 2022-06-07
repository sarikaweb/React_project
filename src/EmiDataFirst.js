import React from 'react';

const EmiDataFirst = (props) => {
    let TotalAmount = props.data.amount * Math.pow((1+ (props.data.interest/100)),  props.data.tenure);
    return(
        <> 
        <div className='col-6'>
           <p> Principal : {props.data.amount}</p>
           
           <p> Interest : {TotalAmount - props.data.amount}</p>
          
           <p> Amount : {TotalAmount}</p>

        </div>
        </>
    )
}

export default EmiDataFirst;