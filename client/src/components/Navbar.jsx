import React from 'react';

const Navbar = ({item}) =>{
  return(
    <div className='cardfood-card-horizontal p-3'>
      <div className='row align-items-center'>
      <div className='col-7'>
        <small className='text-muted'>{item.brand}</small>
        <h5 className='fw-bold m-0'>{item.name}</h5>
        <p className='text-success fw-bold'>at₹{item.price}*</p>
        <button className='btn order-btn btn-sm'>ORDER NOW</button>
      </div>
      <div className='col-5'>
        <img 
        src={item.img}
        alt={item.name}
        className='img-fuild rounded-circle shadow-sm'/>
      </div>
      </div>
    </div>
  );
};

 export default Navbar;
 