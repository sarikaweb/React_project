import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import "./css/style.css";
import './App.css';
import Header from './common/Header';
import Home from './Home';
import Todolist, {useState} from './todolist';

import Footer from './common/Footer';

import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './common/sidebar';
import DigiTime from './Digitime';
import ModalComponent from './ModalComponent';
import CurrencyConverter from './CurrencyConverter';
import ThemeSwitcher from './ThemeSwitcher';
import WeatherApp from './WeatherApp';


function App() {
  return (
    <BrowserRouter >
 <Header />
   <Container>
    <Row>
      <Col className='col-md-3 bg-gray'>
      <Sidebar/>
      </Col>
      <Col className='col-md-9npm   padding-all'>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/todolist" element={<Todolist />} />
      <Route path="/Digitime" element={<DigiTime />} />
      
      <Route path="/ModalComponent" element={<ModalComponent />} />
      <Route path="/CurrencyConverter" element={<CurrencyConverter />} />
      <Route path="/ThemeSwitcher" element={<ThemeSwitcher />} />
      <Route path="/WeatherApp" element={<WeatherApp />} />
    </Routes>
      </Col>
    </Row>
    </Container>
   
    <Footer />
   
    </BrowserRouter>
    


 
  );
  
}

export default App;
