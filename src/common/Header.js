import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import HeaderMenu from './HeaderMenu';



class Header extends React.Component {
  render() {
    return (
        <>
        <div className="bg-black">
        <div className='row'>
           <div className='col-12 text-center'>
                <HeaderMenu/>
           </div>
           </div>
           </div>

      </>
    )
  }
}

export default Header;