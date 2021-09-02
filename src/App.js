// modules
import React from "react";
import "./App.css";
// local imports
import Header from './main/Header/Header'
import Content from './main/Content/Content'

const App = () => {
  return (
    <div className="root">
      <Header className="root_header"/>
      <Content className="root_content"/>
    </div>
  );
};

export default App;
