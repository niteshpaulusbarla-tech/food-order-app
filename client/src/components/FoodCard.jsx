import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const FoodCard = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top p-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Replace {item.brand} with a static name or logo */}
        <Link to="/" className="navbar-brand fw-bold text-danger fs-4">FOODAPP</Link>
        
        <div className="d-flex gap-4">
          <Link to="/" className="text-decoration-none text-dark fw-bold">Home</Link>
          <Link to="/cart" className="text-decoration-none text-dark fw-bold">Cart</Link>
          <Link to="/login" className="text-decoration-none text-dark fw-bold">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default FoodCard;