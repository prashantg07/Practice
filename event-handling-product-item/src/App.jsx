import React, { Fragment } from "react";
import './App.css';
import ProductItem from "./components/ProductItem";

let App = () => {
  return(
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand">React with Events Handling</a>
      </nav>
      <ProductItem/>
    </Fragment>
    
  )
}

export default App;