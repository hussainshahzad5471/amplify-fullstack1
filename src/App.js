import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
            <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
        <Route path="/Home" element={<Home />} />
         <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
