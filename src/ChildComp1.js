import React  from 'react';



class ChildComp1 extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name : "SarikaA"
        }
    }


  render() {
    return (
        <>
         Name : {this.props.name}

         <NameContenxt.Consumer>

         </NameContenxt.Consumer>
          
      </>
    )
  }
}

export default ChildComp1
