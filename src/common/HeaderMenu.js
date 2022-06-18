import React  from 'react';
import {Link} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import {Navbar, Nav } from 'react-bootstrap';

class HeaderMenu extends React.Component {



  render() {
    return (
        <>

    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand ><Link to="/"><img src={require('../images/logo.png')} alt='' title='' /></Link></Navbar.Brand>
    <Nav><Link to="/Home">Home</Link></Nav>
      <Nav><Link to="/todolist">Todo List</Link></Nav>
      <Nav><Link to="/Digitime">Digital Clock & Date</Link></Nav>
      <Nav><Link to="/ModalComponent">Modal Component</Link></Nav>
      <Nav> <Link to="/CurrencyConverter">Currency Converter</Link></Nav>
      <Nav> <Link to="/WeatherApp">Weather App</Link></Nav>
      <Nav> <Link to="/ExpenseTracker">Expenses</Link></Nav>
      <Nav> <Link to="/EmiCalculator">EMI</Link></Nav>
    
    </Container>
  </Navbar>


      </>
    )
  }
}

export default HeaderMenu;