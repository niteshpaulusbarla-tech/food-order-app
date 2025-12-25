import React from 'react';
import './styles/Login.css';
import Navbar from '../components/Navbar';

const Login = () => {
  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <div className="login-card p-5 shadow-lg">
        <h3 className="text-center fw-bold mb-4">Login</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control custom-input" placeholder="name@example.com" />
          </div>
          <div className="mb-4">
            <label className="form-label">Password</label>
            <input type="password" className="form-control custom-input" placeholder="Enter password" />
          </div>
          <button type="submit" className="btn btn-primary w-100 login-btn">SIGN IN</button>
        </form>
        <p className="text-center mt-3">
          New here? <a href="#" className="text-danger">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;