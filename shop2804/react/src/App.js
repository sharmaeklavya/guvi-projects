import Nav from "./component/navbar";
import ImgSlider from "./component/slider";
import Card from "./component/card";
import { useState } from "react";

export default function App() {
  const products = [
    {
      id: 1,
      img: "http://placeimg.com/340/160/any",
      title: "Product One",
      price: 25.99,
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      stars: 5,
    },
    {
      id: 2,
      img: "https://placebear.com/340/160",
      title: "Product Two",
      price: 20.52,
      desc:
        "dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      stars: 2,
    },
    {
      id: 3,
      img: "https://picsum.photos/340/160",
      title: "Product Three",
      price: 39.45,
      desc: "amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      stars: 4,
    },
    {
      id: 4,
      img: "http://placeimg.com/340/160/any",
      title: "Product Four",
      price: 59.32,
      desc:
        "consectetur adipisicing elit. Amet numquam aspernatur! ipsum dolor sit amet, consectetur adipisicing elit.",
      stars: 3,
    },
    {
      id: 5,
      img: "https://loremflickr.com/340/160",
      title: "Product Five",
      price: 42.15,
      desc:
        "adipisicing elit. Amet numquam aspernatur! ipsum dolor sit amet, consectetur adipisicing elit.",
      stars: 5,
    },
    {
      id: 6,
      img: "https://placebeard.it/340x160",
      title: "Product Six",
      price: 15.99,
      desc:
        "elit. Amet numquam aspernatur! ipsum dolor sit amet, consectetur adipisicing elit.",
      stars: 2,
    },
  ];

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [disable, setDisable] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setTotalPrice(+(totalPrice + item.price).toFixed(2));
    setTotalItems(totalItems + 1);
    setDisable([...disable, item.id]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((obj) => obj.id !== item.id));
    setTotalPrice(+(totalPrice - item.price).toFixed(2));
    setTotalItems(totalItems - 1);
    setDisable(disable.filter((obj) => obj !== item.id));
  };

  return (
    <>
      <Nav></Nav>
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <ImgSlider></ImgSlider>
            <div className="row">
              {products.map((product) => (
                <Card
                  data={product}
                  handleClick={addToCart}
                  disableState={disable}
                ></Card>
              ))}
            </div>
          </div>
          <div className="col-lg-3">
            <h2 className="h5 my-4 text-center">Items in cart</h2>
            {cart.map((item) => {
              return (
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>{item.title}</span>
                    <span>${item.price}</span>
                    <span>
                      <i
                        className="fas fa-minus-square btn"
                        onClick={() => {
                          removeFromCart(item);
                        }}
                      ></i>
                    </span>
                  </li>
                </ul>
              );
            })}
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between">
                <span className="font-weight-bold">Total</span>
                <span className="font-weight-bold ml-5 pl-2">
                  ${totalPrice}
                </span>
                <span>
                  {totalItems}
                  <small> Pcs</small>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
