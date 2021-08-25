// modules
import React from "react";
import "./App.css";
// local imports
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

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
