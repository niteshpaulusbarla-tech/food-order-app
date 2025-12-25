import React from 'react';
import Navbar from '../components/Navbar';
import "../styles/App.css";

const FOOD_ITEMS = [
    { id: 1, brand: 'Christina Sweets and Bakery',name: 'Blue Pearls Pineapple Cake  (450gm)',price: 489,img :'https://cdnnew.igp.com/f_auto,q_auto,t_pnopt9prodlp/products/p-blue-pearls-pineapple-cake-450-gm--421560-m.jpg'},
    { id: 2, brand: 'Punjabi Kitchen',name: 'Punjabi Special Non Veg Thali',price:380,img :'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhs9aZGsKcTR-R0gCx6TX8Vevr77N8md5nInb84l3c5Vtn1ReygFc15yIq-KD4o282RkWlShxlcp1ocEmG8-50KDQFnJ-daGgioz2_OrqwH9AhgcTx1319Q1P2y-LdoE0xiU1_dlTzxw8V3/s640/punjabiThali.jpg'},
    { id: 3, brand: 'Lunchbox-Meals & Thalis',name: 'Chicken Kheema and Paratha Lunchbox',price:279, img :'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/7/9/de6c2611-3720-4805-903d-1d3dea13ffab_95553d2c-ce42-43f1-9046-50796b9351f9.jpeg'},
]
  

const Home = () => {
  return (
    <div className="container pb-5">
      {/* Search Header */}
      <div className="mt-3">
        <input type="text" className="form-control custom-search-bar" placeholder="Search for 'High Prote...'" />
      </div>

      {/* Red Promo Section */}
      <div className="promo-banner text-center">
        <h3>'TIS THE SEASON TO</h3>
        <h1 className="fw-bolder">CELEBRATE</h1>
        <button className="btn btn-light rounded-pill px-4 mt-2">ORDER NOW</button>
      </div>

      {/* Food List */}
      <h5 className="fw-bold mt-4 mb-3">Restaurant List</h5>
      {FOOD_ITEMS.map(food => (
        <FoodCard key={food.id} item={food} />
      ))}
    </div>
  );
};

export default Home;