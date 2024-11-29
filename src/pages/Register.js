import React, { useState } from 'react';
import { signUp } from '../config/firebase';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

import logoImage from '../assets/logo-color.png';
import loginImage from '../assets/login-img.jpg';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/login'); // Redirect to login after successful signup
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div id='auth-module'>
      <Link to="/" className="home-btn">
        <i className="fa fa-home"></i>
      </Link>
      <div id="body-container">
        <div id="login-box">
          <img src={logoImage} alt="" width="200px" />
          <img src={loginImage} alt="" className="login-img" />
          <div className="login-header">
            <h2>Sign Up</h2>
            <p>Let's get started on QuickMed Journey.</p>
          </div>
          <form id="signup-form" onSubmit={handleSignUp}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;