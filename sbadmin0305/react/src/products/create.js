import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../usercontext";

export default function CreateProduct() {
  const productData = useContext(UserContext);
  const history = useHistory();

  const [id, setId] = useState(7);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [shop, setShop] = useState("");
  const [submit, setSubmit] = useState("");

  const submitInfo = () => setSubmit((submit) => "1 product created");

  let productSubmit = (e) => {
    e.preventDefault();
    productData.setProductList([
      ...productData.productList,
      {
        id: id,
        name,
        price,
        quantity,
        shop,
      },
    ]);
    submitInfo();
    setId((id) => id + 1);
    setTimeout(() => {
      history.push("/products");
    }, 500);
  };

  return (
    <>
      <h1 className="h3 my-3">List a product</h1>
      <h5 className="h5 my-3 text-center text-primary">{submit}</h5>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={productSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputProduct">Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputProduct"
                    placeholder="Enter product name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPrice">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputPrice"
                    placeholder="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    min="1"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputQuantity">Quantity</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputQuantity"
                    placeholder="i.e. 27"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    min="1"
                    required
                  />
                </div>

                <div className="form-group col-md-6">
                  <label for="inputShop">Shop At</label>
                  <input
                    type="textr"
                    className="form-control"
                    id="inputShop"
                    placeholder="i.e. Amazon, Flipkart"
                    value={shop}
                    onChange={(e) => setShop(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
