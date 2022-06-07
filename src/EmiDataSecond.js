import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Pie} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const EmiDataSecond = (props) => {
    let compamount = props.data.amount * Math.pow((1+ (props.data.interest/100)),  props.data.tenure);

    const data = {
        labels: [ 'Pricipal', 'Interest'],
        datasets: [
          {
            label: '# of Votes',
            data: [props.data.amount, compamount - props.data.amount ],
            backgroundColor: [
              'red',
              'green',
            ],
            borderColor: [
              'black',
              'gray',
            ],
            borderWidth: 1,
          },
        ],
      };

    return(
        <>
        <div className='col-6'>
        Chsrt Display
        <Pie data={data}/>
        </div>
        </>
    )
}

export default EmiDataSecond;