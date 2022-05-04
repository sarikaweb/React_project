import React, { Component, useState } from 'react';




class DigiClock extends React.Component {
    constructor(props) {
        super(props);
  
    console.log('state here...');
    this.state = {
        time: new Date().toLocaleString()
    };
}
static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps here...');
    return null;
}
componentDidMount() {
    setInterval(() => {
          this.setState({
              time: new Date().toLocaleString(),
          });
      }, 1000);
  }
componentWillUnmount(){
    
}
render() {
    return (
        <>
         <div className='date-time'>
             <h1>Digital Clock</h1>

             <h6>Date & Time : {this.state.time}</h6>
         </div>
      </>
    )
    }
}

export default DigiClock;