import React from 'react';
import Switch from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import About from './application/About';
import Home from './application/Home';
import Listing from './application/Listing';
import Login from './application/Login';
import Protected  from './application/Protected';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Signup from './application/Signup';
import Form from './application/form';

function App() {
  return (
    <div className="App">
    <Login/>


    <Signup />
    <Form />

    </div>
  );
}

export default App;
