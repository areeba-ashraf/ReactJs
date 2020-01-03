import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Card2,Card3,Card4,Card5} from './card2.js';
import Card from './card';
import Footer from './foot';
import Timer from './timer.js'


function App(){
  return (
    <div className="App">
      <Timer/>
      <Card />
      <Card2 invite="Loreum ipsium"/>
      <Card3 invite="Loreum ipsium"/>
      <Card4 invite="Loreum ipsium"/>
      <Card5 invite="Loreum ipsium"/>
      <Footer/>

    </div>
  );


}




export default App;
