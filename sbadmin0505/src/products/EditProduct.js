import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../usercontext";

export default function EditProduct(props) {
  const productData = useContext(UserContext);
  const history = useHistory();

  const [id, setId] = useState(1);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [shop, setShop] = useState("");
  const [submit, setSubmit] = useState("");

  const submitInfo = () => setSubmit("1 product updated");

  useEffect(async () => {
    const getPromise = await fetch(
      "https://6093bd12a7e53a0017951767.mockapi.io/products"
    );
    const getData = await getPromise.json();
    editProduct(getData);
  }, []);

  function editProduct(products) {
    products.map((product) => {
      if (product.id === props.match.params.id) {
        setName([product.name]);
        setPrice([product.price]);
        setQuantity([product.quantity]);
        setShop(product.shop);
      }
    });
  }

  let productSubmit = async (e) => {
    e.preventDefault();

    await fetch(`https://6093bd12a7e53a0017951767.mockapi.io/products/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        price: price,
        quantity: quantity,
        shop: shop,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    submitInfo();
    setId((id) => id);
    setTimeout(() => {
      history.push("/products");
    }, 500);
  };

  return (
    <>
      <h1 className="h3 my-3">Edit product no {props.match.params.id}</h1>
      <h5 className="h5 my-3 text-center text-primary">{submit}</h5>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={productSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputProduct">Product Name</label>
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
                  <label htmlFor="inputPrice">Price</label>
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
                  <label htmlFor="inputQuantity">Quantity</label>
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
                  <label htmlFor="inputShop">Shop At</label>
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
