import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import "./css/style.css";
import './App.css';
import Header from './common/Header';
import Home from './Home';
import Todolist, {useState} from './todolist';

import Footer from './common/Footer';

import { Row } from 'react-bootstrap';
import Sidebar from './common/sidebar';
import DigiTime from './Digitime';


function App() {
  return (
    <BrowserRouter>
 <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/todolist" element={<Todolist />} />
      <Route path="/Digitime" element={<DigiTime />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
