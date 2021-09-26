import { Link } from "react-router-dom";

export default function ListProducts(props) {
  const productData = [
    {
      id: 1,
      name: "Smart Wallet",
      price: 89,
      quantity: 26,
      shopAt: "Amazon",
    },
    {
      id: 2,
      name: "Infinite Projector",
      price: 150,
      quantity: 12,
      shopAt: "Amazon",
    },
    {
      id: 3,
      name: "Digital Camera",
      price: 2098,
      quantity: 5,
      shopAt: "Sony",
    },
    {
      id: 4,
      name: "Backpack by Google",
      price: 199.99,
      quantity: 59,
      shopAt: "Samsonite",
    },
    {
      id: 5,
      name: "Mini Arcade",
      price: 119.99,
      quantity: 45,
      shopAt: "Toys",
    },
    {
      id: 6,
      name: "Fitness Bundle",
      price: 1495,
      quantity: 19,
      shopAt: "Liteboxer",
    },
  ];
  return (
    <>
      <div class="container-fluid">
        <h1 class="h3 mb-2 text-gray-800">Product Listing</h1>
        <p class="mb-4">
          <Link to="/createproduct">Create a new product</Link>
        </p>

        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Products</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
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
                  {productData.map((product) => (
                    <tr>
                      <td> {product.name}</td>
                      <td> {product.price}</td>
                      <td> {product.quantity}</td>
                      <td> {product.shopAt}</td>

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
