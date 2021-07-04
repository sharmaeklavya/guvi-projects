import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../usercontext";

export default function ListProducts() {
  const products = useContext(UserContext);
  const [productList, setProductList] = useState([]);

  // use effect
  useEffect(async () => {
    const getPromise = await fetch(
      "https://6093bd12a7e53a0017951767.mockapi.io/products"
    );
    const getData = await getPromise.json();
    setProductList([...getData]);
  }, []);

  return (
    <>
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Product Listing</h1>
        <p className="mb-4">
          <Link to="/createproduct">Create a new product</Link>
        </p>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Products</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
              >
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Shop At</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {productList.map((product) => (
                    <tr>
                      <td> {product.name}</td>
                      <td> {product.price}</td>
                      <td> {product.quantity}</td>
                      <td> {product.shop}</td>
                      <td>
                        <Link to={"/editproduct/" + product.id}>Edit</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
