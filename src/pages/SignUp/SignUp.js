import React, { useState } from 'react';
import './SignUp.css';
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    nic: '',
    username: '',
    password: ''
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      address: formData.address,
      nic:formData.nic,
      username:formData.username,
      Password:formData.password
    };

    try {
      await axios.post('http://localhost:8080/customers/addC', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert("Customer added successfully");
    } catch (error) {
      console.error("There was an error adding the customer:", error);
    }


    setFormData({
      name: "",
      address: "",
      email: "",
      phoneNumber: "",
      nic: "",
      username:"",
      password:"" 
    });
  };

  
  return (
    <div>
      <Navbar/>
      <div className="signup-container">
        <div className="signup-box">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your E-Mail"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Your Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="nic"
              placeholder="Your NIC"
              value={formData.nic}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Create account</button>

            <div className="terms">
              <input type="checkbox" required /> By continuing, I agree to the terms of use & privacy policy.
            </div>

            <p className="login-link">
              Already have an account? <a href="/logIn">Login here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;