import React from 'react';
import './styles/Cart.css';
import Navbar from '../components/Navbar';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Margherita Pizza', price: 299, qty: 1, img: 'https://via.placeholder.com/80' },
    { id: 2, name: 'Veg Burger', price: 149, qty: 2, img: 'https://via.placeholder.com/80' },
  ];

  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4">Your Cart</h2>
      <div className="row">
        <div className="col-md-8">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item d-flex align-items-center p-3 mb-3 shadow-sm">
              <img src={item.img} alt={item.name} className="rounded" />
              <div className="ms-3 flex-grow-1">
                <h6 className="mb-0 fw-bold">{item.name}</h6>
                <small className="text-muted">₹{item.price}</small>
              </div>
              <div className="quantity-controls d-flex align-items-center">
                <button className="btn btn-outline-secondary btn-sm">-</button>
                <span className="mx-2">{item.qty}</span>
                <button className="btn btn-outline-secondary btn-sm">+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <div className="summary-card p-4 shadow-sm">
            <h5>Order Summary</h5>
            <hr />
            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>₹597</span>
            </div>
            <div className="d-flex justify-content-between text-success">
              <span>Discount</span>
              <span>-₹50</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold fs-5">
              <span>Total</span>
              <span>₹547</span>
            </div>
            <button className="btn btn-danger w-100 mt-3 checkout-btn">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;