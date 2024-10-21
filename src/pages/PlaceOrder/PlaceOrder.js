import React from 'react';
import './PlaceOrder.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const PlaceOrder = () => {
  return (
    <>
    <Navbar/>
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type='text' placeholder='First Name'/>
          <input type='text' placeholder='Last Name'/>
        </div>
        <input type='email' placeholder='E-Mail Address'/>
        <input type='text' placeholder='Shipping Address'/>
        <input type='text' placeholder='Phone'/>
      </div>
      <div className='place-order-right'>
        
      </div>
    </form>
    <Footer/>
    </>
  )
}

export default PlaceOrder;