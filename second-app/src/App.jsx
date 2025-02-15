import React, { Fragment } from 'react'
import './App.css'
import Employee from './components/Employee';
import Student from './components/Student';

let App = () => {
  return (
    <Fragment>
      <nav className="navbar">
        <span>Welcome to App Component-Props</span>
      </nav>
      <Employee name="Prashant" age={25} />
      <Employee name="Sandeep" age={30} />

      <Student name="John" course="B-Tech" />
      <Student name="Smith" course="Mbbs"/>
    </Fragment>
  )
}

export default App;

