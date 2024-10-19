import React from "react";
import { useNavigate } from "react-router-dom";
import "./ViewSupplier.css";
import AdminSidebar from "../../components/adminsidebar/AdminSidebar";
import AdminNavbar from "../../components/adminnavbar/AdminNavbar";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

const ViewSupplier = ({ supplier = {} }) => {
    const navigate = useNavigate();

    const {
        supplierId = "93",
        supplierName = "Olivia",
        supplierEmail = "olivia@gmail.com",
        supplierPhone = "0764534455",
        supplierAddress = "Koswaththa, Battaramulla.",
        image = null,
    } = supplier;

    const handleEdit = () => {
        navigate(`/manageSuppliers/supplierId/updateSupplier`); // Navigate to the Edit Product page
    };

    return (
        <div className="viewSupplier">
            <AdminSidebar />
            <div className="viewSupplierContainer">
                <AdminNavbar />
                <div className="top">
                    <h1>SUPPLIER DETAILS</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <div className="imageContainer">
                            {image ? (
                                <img
                                    src={image}
                                    alt="Uploaded Preview"
                                    className="imagePreview"
                                />
                            ) : (
                                <LocalShippingOutlinedIcon className="placeholder" />
                            )}
                        </div>
                    </div>
                    <div className="right">
                        <div className="details">
                            <div className="detailItem">
                                <span className="itemKey">Supplier:</span>
                                <span className="itemValue">{supplierName}</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Supplier ID:</span>
                                <span className="itemValue">{supplierId}</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">E-Mail:</span>
                                <span className="itemValue">{supplierEmail}</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Phone:</span>
                                <span className="itemValue">{supplierPhone}</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Address:</span>
                                <span className="itemValue">{supplierAddress}</span>
                            </div>
                            <button type="button" onClick={handleEdit}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewSupplier;