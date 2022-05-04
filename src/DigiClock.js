import React, { useState } from 'react';
class DigiClock extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        time: new Date().toLocaleString(),
        delete: false,
    };
}
static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps here...');
    return null;
}
componentDidMount() {
    console.log('mount here...');
      this.timerID = setInterval(
        () => this.clockTime(),
        1000
      );
    }
  
  
componentWillUnmount(){
console.log('unmount here...');
clearInterval(this.timerID);
}

 clockTime() {
    this.setState({
       time: new Date().toLocaleString(),
   });
  
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