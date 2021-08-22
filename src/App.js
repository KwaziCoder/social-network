// modules
import React from "react";
import "./App.css";
// local imports
import Header from './components/Header'
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="root">
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  );
};

export default App;
