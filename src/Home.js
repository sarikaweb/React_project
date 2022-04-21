import React, { Component } from 'react'

class Home extends React.Component {

    constructor(){
        super();
        console.log("Home");

        this.state = {
            count : 0
        }
    }
    increaseFunc  = () => {
    console.log(this.state.count + 1);
    // this.state = {
    //     count:this.state.count + 1
    // }

    this.setState(
        {
            count:this.state.count + 1
        }
    )
    }
    decreaseFunc  = () => {
        console.log(this.state.count - 1);

        // this.state = {
        //     count:this.state.count - 1
        // }

        this.setState(
            {
                count:this.state.count - 1
            }
        )
        }
  render() {
    return (
        <>
      <div><h1>Home Page</h1></div>
      <div>count = {this.state.count}</div>
      <button onClick={this.increaseFunc}>Increase</button>
      <button onClick={this.decreaseFunc}>Decrease</button>
      </>
    )
  }
}

export default Home;