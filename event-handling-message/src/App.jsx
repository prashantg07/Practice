import React, { Fragment } from "react";
import './App.css';
import WishMessage from "./components/WishMessage";

let App = () => {
  return(
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand">React with Events Handling</a>
      </nav>
      <WishMessage/>
    </Fragment>
    
  )
}

export default App;