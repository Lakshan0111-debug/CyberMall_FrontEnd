import React from 'react';
import './CustomerProfile.css';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const CustomerProfile = (customer) => {
    const {
        customerUsername = "oLiv36",
        customerName = "Olivia",
        customerEmail = "olivia@gmail.com",
        customerPhone = "0764534455",
        customerAddress = "Koswaththa, Battaramulla.",
        customerNIC = "993747583V",
        password = "12345",
        //image = null,
    } = customer;
    
    return (
    <div>
        <Navbar/>
        <div className="customerProfile">
            <div className="customerProfileContainer">
                <h2>Customer Profile</h2>
                <div className="details">
                    <div className="detailItem">
                        <span className="itemKey">Username: </span>
                        <span className="itemValue">{customerUsername}</span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Customer: </span>
                        <span className="itemValue">{customerName}</span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">E-Mail: </span>
                        <span className="itemValue">{customerEmail}</span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Phone: </span>
                        <span className="itemValue">{customerPhone}</span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Address: </span>
                        <span className="itemValue">{customerAddress}</span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">NIC: </span>
                        <span className="itemValue">{customerNIC}</span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Password: </span>
                        <span className="itemValue">{password}</span>
                    </div>
                    <div className='detailItem'>
                        <Link to='/customerProfile/customerId/updateProfile'>
                            <button type="submit">Edit Profile</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CustomerProfile;