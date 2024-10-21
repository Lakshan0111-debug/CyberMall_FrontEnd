import React, { useState } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import ExploreCategory from '../../components/ExploreCategory/ExploreCategory';
import ProductsDisplay from '../../components/ProductsDisplay/ProductsDisplay';
import Footer from '../../components/Footer/Footer';
import LoginPopup from '../../components/LoginPopup/LoginPopup';

const Home = () => {

  const [category,setCategory] = useState("All")
  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='home'>
        <Navbar setShowLogin={setShowLogin}/>
        <div className='header-container'>
          <Header/>
        </div>
        <ExploreCategory category={category} setCategory={setCategory}/>
        <ProductsDisplay category={category}/>
        <Footer/>
      </div>
    </>
  )
}

export default Home;