import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages";
import ContactMe from "./Pages/ContactMe";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;
