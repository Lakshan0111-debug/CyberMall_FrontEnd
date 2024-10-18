import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../../InventoryTableSource";
import "./InventoryTable.css";
import { Link } from "react-router-dom";

const InventoryTable = () => {
  const [data] = useState(productRows);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/products");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching products data", error);
      }
    };

    fetchProducts();
  }, []);

  const productColumns = [
    { field: "ProductId", headerName: "Product ID", width: 100 },
    {
      field: "ProductName",
      headerName: "Product",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.product}
          </div>
        );
      },
    },
    { field: "SupplierName", headerName: "Supplier", width: 180 },
    { field: "UnitPrice", headerName: "Unit Price (LKR)", width: 150 },
    { field: "Quantity", headerName: "Quantity", width: 100, },
  ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/manageInventory/productId" style={{ textDecoration: "none" }}>
              <div className="viewButton">VIEW</div>
            </Link>
            <div className="deleteButton">DELETE</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="inventoryTable">
      <div className="inventoryTableTitle">
        <span>PRODUCTS LIST</span>
        <Link to="/manageInventory/addNew" style={{ textDecoration: "none" }}>
          <span className="link">ADD NEW</span>
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={productColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};
export default InventoryTable;