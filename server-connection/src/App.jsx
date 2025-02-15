import React, { Fragment } from "react";
import './App.css';
import UserList from "./components/UserList";

let App = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand">React with Server Connection</a>
      </nav>
      <UserList/>
    </Fragment>
  )
}

export default App;