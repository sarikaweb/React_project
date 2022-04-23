import React, { Component } from 'react';


class HeaderMenu extends React.Component {
  render() {
    return (
        <>
           <div className='main-navigation'>
               <a href='/Home' className='text-black'>Home</a>
               <a href='/todolist' className='text-black'>Todo List</a>
           </div>
      </>
    )
  }
}

export default HeaderMenu;