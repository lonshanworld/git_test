import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="personwithcart">
        <i className="fa-solid fa-person-walking"></i>
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
      <div id="boxeswithtext">
        <div>
          <h3>Buy Anything you want.</h3>
          <span>Any fashion that suits you must be available.</span>
        </div>
        <div id="smallboxes">
          <i className="fa-solid fa-shirt"></i>
          <i className="fa-solid fa-vest-patches"></i>
          <i className="fa-solid fa-vest"></i>
          <i className="fa-solid fa-user-tie"></i>
          <i className="fa-solid fa-glasses"></i>
          <i className="fa-solid fa-socks"></i>
          <i className="fa-solid fa-shoe-prints"></i>
          <i className="fa-solid fa-mitten"></i>
          <i className="fa-solid fa-hat-wizard"></i>
          <i className="fa-solid fa-hat-cowboy-side"></i>
          <i className="fa-solid fa-hat-cowboy"></i>
          <i className="fa-solid fa-graduation-cap"></i>
        </div>
      </div>
    </div>
  );
}

export default App;
