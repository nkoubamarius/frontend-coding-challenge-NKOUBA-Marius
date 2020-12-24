import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Route path="/">
        <div className="App">
          <Navbar />
          <Body />
        </div>
      </Route>
    </Router>
  );
}

export default App;
