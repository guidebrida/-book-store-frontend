import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Fotter/Footer';
import NewBook from './components/NewBook/NewBook';
// import Login from './components/Login/Login';
// import Register from './components/Register/Register';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <div className="nav-container">
                        <nav className="App-nav">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/new-book">Add your book</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                        <div className="auth-buttons">
                            {!isLoggedIn && (
                                <>
                                    <Link to="/login" className="auth-link">Login</Link>
                                    <Link to="/register" className="auth-link">Register</Link>
                                </>
                            )}
                        </div>
                    </div>
                    <h1>Welcome to Our Store</h1>
                </header>
                <main>
                    <Routes>
                        <Route path="/new-book" element={<NewBook />} />
                        <Route path="/contact" element={<Contact />} />
                        {/*<Route path="/login" element={<Login />} />*/}
                        {/*<Route path="/register" element={<Register />} />*/}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
