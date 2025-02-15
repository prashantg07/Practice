import React, { Fragment } from "react";
import './App.css';
import Counter from "./components/Counter";

let App = () => {
  return(
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand">React with Events Handling</a>
      </nav>
      <Counter/>
    </Fragment>
    
  )
}

export default App;