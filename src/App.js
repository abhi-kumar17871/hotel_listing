import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Property from "./components/Property";
import PropertyDetails from "./components/PropertyDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/" element={<Property />} />
      </Routes>
    </Router>
  );
};

export default App;
