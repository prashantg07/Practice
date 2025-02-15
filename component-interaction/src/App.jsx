import React, { Fragment } from "react";
import './App.css';
import ParentComponent from "./components/basics/ParentComponent";

let App = () => {
  return(
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand">React with Component Interaction</a>
      </nav>
      <ParentComponent/>
    </Fragment>
  )
}

export default App;