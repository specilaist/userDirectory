import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './Components/navbar';
import MainPage from './Pages/mainPage';
import GridPage from './Pages/gridPage';
import Employee from './Pages/employee';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar/>
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/grid" component={GridPage}/>
      <Route exact path="/employee" component={Employee} />
    </Router>
  );
}

export default App;
