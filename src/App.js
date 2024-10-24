import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import LogIn from './pages/LogIn/LogIn';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Review from './pages/Review/Review';
import AdminDashboard from "./pages/admindashboard/AdminDashboard";
import ManageInventory from './pages/manageinventory/ManageInventory';
import AddNewProduct from './pages/addnewproduct/AddNewProduct';
import ViewProduct from './pages/viewproduct/ViewProduct';
import UpdateProduct from './pages/updateproduct/UpdateProduct';
import ManageCustomers from "./pages/managecustomers/ManageCustomers";
import ViewCustomer from './pages/viewcustomer/ViewCustomer';
import ManageSuppliers from './pages/managesuppliers/ManageSuppliers';
import AddNewSupplier from './pages/addnewsupplier/AddNewSupplier';
import ViewSupplier from './pages/viewsupplier/ViewSupplier';
import UpdateSupplier from './pages/updatesupplier/UpdateSupplier';
import ManageOrders from './pages/manageorders/ManageOrders';
import ViewOrder from './pages/vieworder/ViewOrder';
import ManageReviews from './pages/managereviews/ManageReviews';
import ViewReview from './pages/viewreview/ViewReview';
import CustomerProfile from './pages/customerprofile/CustomerProfile';
import EditCustomerProfile from './pages/editcustomerprofile/EditCustomerProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/signUp",
    element: <SignUp/>
  },
  {
    path: "/logIn",
    element: <LogIn/>
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword/>
  },
  {
    path: "/customerProfile/:customerID",
    element: <CustomerProfile/>
  },
  {
    path: "/customerProfile/:customerId/updateProfile",
    element: <EditCustomerProfile/>
  },
  {
    path: "/review",
    element: <Review/>
  },
  {
    path: "/adminDashboard",
    element: <AdminDashboard/>
  },
  {
    path: "/manageInventory",
    element: <ManageInventory/>,
  },
  {
    path: "/manageInventory/addNew",
    element: <AddNewProduct/>,
  },
  {
    path: "/manageInventory/:productId",
    element: <ViewProduct/>,
  },
  {
    path: "/manageInventory/:productId/updateProduct",
    element: <UpdateProduct/>,
  },
  {
    path: "/manageCustomers",
    element: <ManageCustomers/>,
  },
  {
    path: "/manageCustomers/:customerId",
    element: <ViewCustomer/>,
  },
  {
    path: "/manageSuppliers",
    element: <ManageSuppliers/>,
  },
  {
    path: "/manageSuppliers/addNew",
    element: <AddNewSupplier/>,
  },
  {
    path: "/manageSuppliers/:supplierId",
    element: <ViewSupplier/>,
  },
  {
    path: "/manageSuppliers/:supplierId/updateSupplier",
    element: <UpdateSupplier/>,
  },
  {
    path: "/manageOrders",
    element: <ManageOrders/>,
  },
  {
    path: "/manageOrders/:orderId",
    element: <ViewOrder/>,
  },
  {
    path: "/manageReviews",
    element: <ManageReviews/>,
  },
  {
    path: "/manageReviews/:reviewId",
    element: <ViewReview/>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;