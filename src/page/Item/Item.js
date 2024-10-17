import React from 'react';
import 'Item.css';
import Car from '../../Assets/pexels-pixabay-39501.jpg'

export default function Item() {
  return (
    <div className=' itam'>
        <img src={Car} alt='' className='car'/>
        <p>Car name</p>
        <div className='item-prices'>
            <div className='item-prices-new'>
                
            </div>

        </div>

      
    </div>
  )
}
