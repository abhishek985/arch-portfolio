import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import Projects from './component/Projects/Projects';
import ProjectShowcase from'./component/ProjectShowcase/projectShowcase';
import CategoryPage from './component/ProjectShowcase/CategoryPage';
import ContactInformationComponent from './component/Home/ContactInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-showcase" element={<ProjectShowcase />} />
        <Route path="/projects/:category" element={<CategoryPage />} />
        <Route path="/contact" element={<ContactInformationComponent />} />
      </Routes>
    </Router>
  );
}

export default App;