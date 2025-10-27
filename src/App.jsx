// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import ResourcesPage from './pages/ResourcesPage';
import PolicyPage from './pages/PolicyPage';

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/privacy-policy" element={<PolicyPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;