import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import Projects from './component/Projects/Projects'
import ContactInformationComponent from './component/Home/ContactInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactInformationComponent />} />
      </Routes>
    </Router>
  );
}

export default App;