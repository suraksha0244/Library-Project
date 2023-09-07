import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"; 

import libLogo from "../components/images/lib logo.png";
import baseUrl from "../utils/baseUrl";
import { ToastContainer, toast } from "react-toastify";

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
            <h1 className="mb-0" style={{ color: "white" }}>
              <b>The LearnUp</b>
            </h1>
          </div>
        </div>
        <ul className="d-flex align-items-center">
          <li>
            <Link to="/Signup" className="btn btn-danger btn-lg">
              Sign Up
            </Link>
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
          <p>&copy; 2023 THE LEARNUP </p>
        </ul>
      </nav>
    </footer>
  );
}

export default function Login({ setUser }) {
  const navigate = useNavigate();
  // Define the handleLogin function here
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    axios
      .post(`${baseUrl}/users/signin`, {
        email: email,
        password: password,
      })
      .then((response) => {
        setUser(response.data.data);
        navigate("/");
      })
      .catch((error) => {
        console.log("Login error:", error);
        toast.error("Login failed!");
      });
  };

  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
      />

     
      <Header />

      
      <div className="login-container bg-secondary-subtle">
        <div className="login-box">
          <h2 className="login-title">Library Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Your Email"
                name="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Your Password"
                name="password"
              />
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberPassword"
              />
              <label htmlFor="rememberPassword" className="form-check-label">
                Remember your Password
              </label>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-login">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

  
      <Footer />
    </div>
  );
}
