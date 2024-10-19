import React from "react";
import "./ViewCustomer.css";
import AdminSidebar from "../../components/adminsidebar/AdminSidebar";
import AdminNavbar from "../../components/adminnavbar/AdminNavbar";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

const ViewCustomer = ({ customer = {} }) => {

    const {
        customerId = "93",
        customerUsername = "oLiv36",
        customerName = "Olivia",
        customerEmail = "olivia@gmail.com",
        customerPhone = "0764534455",
        customerAddress = "Koswaththa, Battaramulla.",
        image = null,
    } = customer;

    return (
        <div className="viewCustomer">
            <AdminSidebar />
            <div className="viewCustomerContainer">
                <AdminNavbar />
                <div className="top">
                    <h1>CUSTOMER DETAILS</h1>
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
                                <PeopleAltOutlinedIcon className="placeholder" />
                            )}
                        </div>
                    </div>
                    <div className="right">
                        <div className="details">
                            <div className="detailItem">
                                <span className="itemKey">Customer:</span>
                                <span className="itemValue">{customerName}</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Customer ID:</span>
                                <span className="itemValue">{customerId}</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Username:</span>
                                <span className="itemValue">{customerUsername}</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">E-Mail:</span>
                                <span className="itemValue">{customerEmail}</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Phone:</span>
                                <span className="itemValue">{customerPhone}</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Address:</span>
                                <span className="itemValue">{customerAddress}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCustomer;