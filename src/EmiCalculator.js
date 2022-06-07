import React, {Component} from 'react';
import EmiAmount from './EmiAmount';
import EmiInterest from './EmiInterest';
import EmiTenure from './EmiTenure';
import EmiDataFirst from './EmiDataFirst';
import EmiDataSecond from './EmiDataSecond';

class EMICalculator extends React.Component {
    constructor() {
        super();
        this.state = {
            amount: 1000,
            interest: 6,
            tenure:6
        }
    }

    handleClickAmount = (event) => {
        this.setState({
            ...this.state,
            amount: event.target.value,
        })
    }
    handleClickInterest = (event) => {
        this.setState({
            ...this.state,
            interest: event.target.value,
        })
    }
    handleClickTenure = (event) => {
        this.setState({
            ...this.state,
            tenure: event.target.value,
        })
    }

    render() {
        return(
            <>
            <h2>EMI Calculator</h2>
            <EmiAmount amount={this.state.amount} handleClick={this.handleClickAmount}/>
           <EmiInterest interest={this.state.interest} handleClick={this.handleClickInterest}/>
           <EmiTenure tenure={this.state.tenure} handleClick={this.handleClickTenure}/>
            <div className='row'>
            <EmiDataFirst data={this.state}/>
            <EmiDataSecond data={this.state}/>
            </div>


            </>
        )
    }
}

export default EMICalculator;
