import React from 'react';

import { Link } from 'react-router-dom';
import './Login.css'; // You can create a CSS file for custom styles
import libLogo from '../components/images/lib logo.png';


function Header() {
  return (
    <header className="bg-secondary-subtle header-with-background">
      <nav className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src={libLogo}
            alt="MY LIBRARY"
            width="100px"
            height="100px"
            className="mr-2"
          />
          <div className="library-card">
            <h1 className="mb-0" style={{ color: 'white' }}><b>The LearnUp</b></h1>
          </div>
        </div>
        <ul className="d-flex align-items-center">
        
         
         
          <li>
            <Link to="/Signup" className="btn btn-danger btn-lg">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="fixed-footer">
      <nav>
        <ul>
          <p>&copy; 2023 MY LIBRARY </p>
        </ul>
      </nav>
    </footer>
  );
}




const Login = () => {
  return (

    <div>
    {/* Include the Header component */}
    <Header />

    {/* Login Form */}
    <div className="login-container bg-primary-subtle">
      <div className="login-box">
        <h2 className="login-title">Library Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Your Email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Your Password"
              name="password"
            />
          </div>
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="rememberPassword" />
            <label htmlFor="rememberPassword" className="form-check-label">Remember your Password</label>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-login">Login</button>
          </div>
        </form>
      </div>
    </div>

     {/* Include the Footer component */}
     <Footer />
    </div>
  );
};

export default Login;