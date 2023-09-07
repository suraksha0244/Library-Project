import React, { useState } from "react"; 
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import Axios from "axios";
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
            <Link to="/" className="btn btn-danger btn-lg">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Login" className="btn btn-danger btn-lg">
              Login
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

const Signup = ({ setUser }) => {
  // Using state to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
  });

  //Creating a function to handle form submission
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Signing up...");
    try {
      const response = await Axios.post(`${baseUrl}/users/signup`, formData);
      setUser(response.data.data);
      toast.update(toastId, {
        render: "Signup successful!",
        type: "success",
        isLoading: false,
      });
      // Redirect to MyBooks page on successful signup
      navigate("/");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  //Update form elements with value and onChange handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
      />
      <Header />
      <div className="signup-container  bg-secondary-subtle">
        <div className="signup-card">
          <form className="row g-3" onSubmit={handleSignup}>
            <h2 className="signup-title">Sign Up</h2>
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                name="name"
                className="form-control"
                value={formData.name} 
                onChange={handleChange} 
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                name="email"
                className="form-control"
                value={formData.email} 
                onChange={handleChange} 
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter Your Password"
                name="password"
                className="form-control"
                value={formData.password} 
                onChange={handleChange} 
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="form-control"
                value={formData.dob} 
                onChange={handleChange} 
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary btn-signup">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
