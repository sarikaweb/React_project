import React  from 'react';



class ChildComp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        name : "SarikaB"
    }
}



  render() {
    return (
        <>
             <ChildComp name={this.props.name} />
          
      </>
    )
  }
}

export default ChildComp
