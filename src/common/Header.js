import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import HeaderMenu from './HeaderMenu';



class Header extends React.Component {
  render() {
    return (
        <>
        <div className="bg-primary">
        <div className='row'>
        <div className='col-6'>
           <div className='header'>Logo Here</div>
           </div>
         
           <div className='col-6'>
            
                <HeaderMenu/>
            
           </div>
           </div>
           </div>

      </>
    )
  }
}

export default Header;