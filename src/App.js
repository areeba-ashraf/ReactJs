import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './card.js';
import Card2 from './card2.js';
import Card3 from './card3.js';



function App(){
  return (
    <div className="App">
      <Card/>
      <Card2 invite="Loreum ipsium"/>
      <Card3/>
    </div>
  );


}




export default App;
