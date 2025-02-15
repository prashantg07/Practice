import React, { Fragment } from "react";
import './App.css';
import RegisterForm from "./components/RegisterForm";

let App = () => {
  return(
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand">React with Registration Form</a>
      </nav>
      <RegisterForm/>
    </Fragment>
  )
}

export default App;