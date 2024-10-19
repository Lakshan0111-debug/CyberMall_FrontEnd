import React, { useState, useEffect } from "react";
import "./UpdateSupplier.css";
import AdminSidebar from "../../components/adminsidebar/AdminSidebar";
import AdminNavbar from "../../components/adminnavbar/AdminNavbar";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { DriveFolderUploadOutlined, Close } from "@mui/icons-material";

const UpdateSupplier = ({ supplier }) => {
  const [imagePreview, setImagePreview] = useState([]);
  const [formData, setFormData] = useState({
    supplierId: "",
    supplierName: "",
    supplierEmail: "",
    supplierPhone: "",
    supplierAddress: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Populate the form with existing product data when component mounts
    if (supplier) {
      setFormData({
        supplierId: supplier.supplierId,
        supplierName: supplier.supplierName,
        supplierEmail: supplier.supplierEmail,
        supplierPhone: supplier.supplierPhone,
        supplierAddress: supplier.supplierAddress,
      });
      setImagePreview(supplier.image); // Set existing image
    }
  }, [supplier]);

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Allow only one file
    const newPreview = [];

    if (file) {
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!allowedTypes.includes(file.type)) {
        alert(`Invalid file type: ${file.name}. Please upload JPEG or PNG images only.`);
        return;
      }
      newPreview.push(URL.createObjectURL(file)); // Preview the uploaded image
    }

    if (newPreview.length + imagePreview.length > 1) {
        alert("You can only upload one image.");
        return;
    }

    setImagePreview((prev) => [...prev, ...newPreview].slice(0, 1)); // Ensure only 1 image
  };

  const removeImage = (index) => {
    setImagePreview(null); // Remove the current image
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Replace with your submission logic (e.g., API call)
    console.log("Form submitted with data:", {
      image: imagePreview,
      ...formData,
    });
    
    // Simulate a successful submission
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className='updateSupplier'>
      <AdminSidebar />
      <div className='updateSupplierContainer'>
        <AdminNavbar />
        <div className='top'>
          <h1>UPDATE SUPPLIER</h1>
        </div>
        <div className='bottom'>
          <div className="left">
            <div className="imageContainer">
              {imagePreview ? (
                <div className="imageWrapper">
                  <img
                    src={imagePreview}
                    alt="Uploaded Preview"
                    className="imagePreview"
                  />
                  <Close className="removeIcon" onClick={removeImage} />
                </div>
              ) : (
                <ShoppingCartOutlinedIcon className="placeholder" />
              )}
            </div>
          </div>
          <div className='right'>
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor='fileInput' className='fileUploadLabel'>
                  <DriveFolderUploadOutlined className='uploadIcon'/>
                  <span>Choose Image</span>
                </label>
                <input 
                  type="file" 
                  id="fileInput" 
                  multiple 
                  onChange={handleImageChange} 
                  style={{ display: "none" }} 
                />
              </div>
              <div className='formInput'>
                <label>Supplier ID</label>
                <input 
                  type='number' 
                  id='SUPPLIER_ID' 
                  name='supplierId' 
                  value={formData.supplierId} 
                  onChange={handleChange} 
                  placeholder='Enter Supplier ID' 
                  required 
                />
              </div>
              <div className='formInput'>
                <label>Supplier Name</label>
                <input 
                  type='text' 
                  id='SUPPLIER_NAME' 
                  name='supplierName' 
                  value={formData.supplierName} 
                  onChange={handleChange} 
                  placeholder='Enter Supplier Name' 
                  required 
                />
              </div>
              <div className='formInput'>
                <label>E-Mail</label>
                <input 
                  type='String' 
                  id='SUPPLIER_EMAIL' 
                  name='supplierEmail' 
                  value={formData.supplierEmail} 
                  onChange={handleChange} 
                  placeholder="Enter Supplier's E-Mail"
                />
              </div>
              <div className='formInput'>
                <label>Phone</label>
                <input 
                  type='number' 
                  id='SUPPLIER_PHONE' 
                  name='supplierPhone' 
                  value={formData.supplierPhone} 
                  onChange={handleChange} 
                  placeholder="Enter Supplier's Phone Number" 
                />
              </div>
              <div className='formInput'>
                <label>Address</label>
                <input 
                  type='String' 
                  id='SUPPLIER_ADDRESS' 
                  name='supplierAddress' 
                  value={formData.supplierAddress} 
                  onChange={handleChange} 
                  placeholder="Enter Supplier's Address"
                />
              </div>
              <button type='submit' disabled={isSubmitting}>
                {isSubmitting ? "Updating..." : "Update"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSupplier;