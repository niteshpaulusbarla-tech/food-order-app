import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/FoodCard';
import Home from './pages/Home';
import Cart from './pages/Cart';    // REMOVE // FROM HERE
import Login from './pages/Login';  // REMOVE // FROM HERE

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;