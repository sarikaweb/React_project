import React, { createContext }  from 'react';
import ChildComp from './ChildComp';

const NameContenxt = React.createContext();

class ParentComponent extends React.Component {

constructor(){
    super();
    this.state = {
        name : "Sarika"
    }
}

  render() {
    return (
        <>
        <h1>Parent Here</h1>  
        <ParentComponent.provider value={this.state.name}>
        <ChildComp name={this.state.name} />
        </ParentComponent.provider>
          
      </>
    )
  }
}

export default ParentComponent;
export {NameContenxt};