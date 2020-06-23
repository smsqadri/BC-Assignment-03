import React from 'react';
import Breakfast from './Breakfast';
import './App.css';

function App() {
  return (
    <div className="App">

      <Breakfast DishName="Qeema Paratha" Sweet="Gajar Ka Halwa"/>

      <hr/>
      <Breakfast DishName="Aaloo Paratha" Sweet="Kheer"/>

      <hr/>

      <Breakfast DishName="Mooli Paratha" Sweet="Bhashani"/>

      </div>
  );
}

export default App;
