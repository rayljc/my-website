import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
import Analysis from './components/Analysis';
import Guidance from './components/Guidance';
import Database from './components/Database';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/analysis">Analysis</Link>
            </li>
            <li>
              <Link to="/guidance">Guidance</Link>
            </li>
            <li>
              <Link to="/database">Database</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/guidance" element={<Guidance />} />
          <Route path="/database" element={<Database />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
