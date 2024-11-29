import React, { useState } from 'react';
import { signIn } from '../config/firebase';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../assets/logo-color.png';
import loginImage from '../assets/login-img.jpg';
import './Auth.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      console.clear();
      console.log("Login successful");
      navigate('/dashboard');
      console.log("Navigated to dashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert("Failed to login. Please check your credentials.");
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
            <h2>Sign In</h2>
            <p>Please enter the details below to continue.</p>
          </div>
          <form id="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email: </label>
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
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;