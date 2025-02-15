import React, { Fragment } from "react";
import './App.css';
import Employee from "./components/Employee";
import Student from "./components/Student";

let App = () => {
  return(
    <Fragment>
      <nav className="navbar">
        <span>Welcome to App Component-State</span>
      </nav>
      <Employee/>
      <Student/>
    </Fragment>
  )
}

export default App;