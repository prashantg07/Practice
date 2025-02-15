import React, { Fragment } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from "./modules/layout/components/NavBar";
import Home from "./modules/layout/components/Home";
import EmployeeList from "./modules/employees/components/EmployeeList";
import About from "./modules/layout/components/About";
import UserLogin from "./modules/users/components/UserLogin";
import UserRegister from "./modules/users/components/UserRegister";
import PageNotFound from "./modules/layout/components/PageNotFound";

let App = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand">React with Router & Navigation</a>
      </nav>
      <BrowserRouter>
        <NavBar />  {/* Navbar should be outside Routes */}
        <Routes>  {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} />
          <Route path="/employees/list" element={<EmployeeList />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/login" element={<UserLogin />} />
          <Route path="/users/register" element={<UserRegister />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
