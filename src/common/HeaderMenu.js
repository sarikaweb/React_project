import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class HeaderMenu extends React.Component {



  render() {
    return (
        <>
           <div className='main-navigation'>
             
               <Link to="/Home" className='btn btn-primary'>Home</Link>
               <Link to="/todolist"  className='btn btn-primary'>Todo List</Link>
               <Link to="/Digitime"  className='btn btn-primary'>Digital Clock & Date</Link>
           </div>
      </>
    )
  }
}

export default HeaderMenu;