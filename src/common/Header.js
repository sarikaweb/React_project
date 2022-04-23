import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import HeaderMenu from './HeaderMenu';


class Header extends React.Component {
  render() {
    return (
        <>
        <div className="bg-primary">
        <Row>
           <div className='header'>Header Here</div>
         </Row>
           <div className='row'>
             <div className='col-12'>
                <HeaderMenu/>
             </div>
           </div>
           </div>

      </>
    )
  }
}

export default Header;