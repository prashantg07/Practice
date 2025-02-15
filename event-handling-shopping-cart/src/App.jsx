import React, { Fragment } from "react";
import './App.css';
import ShoppingCart from "./components/ShoppingCart";


let App = () => {
  return(
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand">React with Events Handling</a>
      </nav>
      <ShoppingCart/>
    </Fragment>
  )
}

export default App;