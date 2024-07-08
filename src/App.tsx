import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <nav className="App-nav">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
            <h1>Welcome to Our Store</h1>
          </header>
          <main>
            <Routes>

              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
