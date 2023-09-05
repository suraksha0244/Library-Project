import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'; // Create a CSS file for custom styles

// Include your Header component here
function Header() {
  return (
    <header className="bg-secondary-subtle">
      <nav className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src={`${process.env.PUBLIC_URL}lms.jpg`}
            alt="MY LIBRARY"
            width="100px"
            height="100px"
            className="mr-2"
          />
          <h1 className="mb-0" style={{ color: 'black' }}><b>MY LIBRARY</b></h1>
        </div>
        <ul className="d-flex align-items-center">
          <li>
            <Link to="/" className="btn btn-outline-primary">Home</Link>
          </li>
          <li>
            <Link to="/MyBooks" className="btn btn-outline-primary">My Books</Link>
          </li>
          <li>
            <Link to="/Login" className="btn btn-outline-primary hover-button">Login</Link>
          </li>
        
        </ul>
      </nav>
    </header>
  );
}


// Include your Footer component here
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

const Signup = () => {
  return (
    <div>
      {/* Include the Header component */}
      <Header />

      {/* Signup Form */}
      <div className="signup-container  bg-primary-subtle">
        <div className="signup-card">
          <form className="row g-3">
            <h2 className="signup-title">Sign Up</h2>
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                name="name"
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                name="email"
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Your Password"
                name="password"
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="dob" className="form-label">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="form-control"
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary btn-signup">Signup</button>
            </div>
          </form>
        </div>
      </div>

      {/* Include the Footer component */}
      <Footer />
    </div>
  );
};

export default Signup;