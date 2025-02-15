import React, { Fragment } from "react";
import './App.css';
import LoginForm from "./components/LoginForm";

let App = () => {
  return(
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand">React with Login Form</a>
      </nav>
      <LoginForm/>
    </Fragment>
  )
}

export default App;