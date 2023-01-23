import React from 'react';
import './App.css';
import Cake from './Cake';
 

function App() {
  return (
    <div>
      <h1>Bnta Bakery</h1>
      <Cake
      name=" Victoria Sponge"
      ingridients= " eggs,butter,sugar,self-raisig flour, baking powder, milk"
      price = { 5.00}
      rating = { 5}

      />
      <Cake
      name="Tea Loaf"
      ingridients= "eggs,oil, dried fruit,sugar,self-raising flour,strong tea"
      price = {2.00}
      rating = {3}

      />
      <Cake
      name="Carrot Cake"
      ingridients= "carrots,walnuts,oil,cream cheese,flour,sugar"
      price = {8.00}
      rating = {5}

      />

  
      
      
    </div>
  );
}

export default App;
