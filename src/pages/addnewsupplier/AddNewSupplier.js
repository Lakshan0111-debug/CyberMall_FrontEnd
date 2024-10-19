import React, { useState, useEffect } from "react";
import "./AddNewSupplier.css";
import AdminSidebar from "../../components/adminsidebar/AdminSidebar";
import AdminNavbar from "../../components/adminnavbar/AdminNavbar";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { DriveFolderUploadOutlined, Close } from "@mui/icons-material";

const AddNewSupplier = () => {
  const [imagePreview, setImagePreview] = useState(null);

  // Clean up the object URL on unmount or when the image is removed
  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

    if (file && !allowedTypes.includes(file.type)) {
      alert(`Invalid file type: ${file.name}. Please upload a JPEG or PNG image.`);
      return;
    }

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const removeImage = () => {
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
      setImagePreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!imagePreview) {
      alert("Please upload an image.");
      return;
    }

    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());

    console.log("Form submitted with data:", {
      ...formObject,
      image: imagePreview,
    });

    setImagePreview(null);
    e.target.reset();
  };

  return (
    <div className='addNewSupplier'>
      <AdminSidebar />
      <div className='addNewSupplierContainer'>
        <AdminNavbar />
        <div className='top'>
          <h1>ADD NEW SUPPLIER</h1>
        </div>
        <div className='bottom'>
          <div className="left">
            <div className="imageContainer">
              {imagePreview ? (
                <div className="imageWrapper">
                  <img src={imagePreview} alt="Uploaded Preview" className="imagePreview"/>
                  <Close className="removeIcon" onClick={removeImage} />
                </div>
              ) : (
                <LocalShippingOutlinedIcon className="placeholder"/>
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
                <input type="file" id="fileInput" multiple onChange={handleImageChange} style={{ display: "none" }}/>
              </div>
              <div className='formInput'>
                <label>Supplier ID</label>
                <input type='number' id='SUPPLIER_ID' name='supplierId' placeholder='Enter Supplier ID' required/>
              </div>
              <div className='formInput'>
                <label>Supplier Name</label>
                <input type='text' id='SUPPLIER_NAME' name='supplierName' placeholder='Enter Supplier Name' required/>
              </div>
              <div className='formInput'>
                <label>E-Mail</label>
                <input type='String' id='EMAIL' name='supplierEmail' placeholder='Enter Supplier E-Mail'/>
              </div>
              <div className='formInput'>
                <label>Phone</label>
                <input type='number' id='SUPPLIER_PHONE' name='supplierPhone' placeholder="Enter Supplier's Phone Number"/>
              </div>
              <div className='formInput'>
                <label>Address</label>
                <input type='String' id='SUPPLIER_ADDRESS' name='supplierAddress' placeholder="Enter Supplier's Address"/>
              </div>
              <button type='submit'>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewSupplier;