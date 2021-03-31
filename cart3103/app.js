let productData = [
  {
    id: "1",
    product_name: "Tasty Granite Towels",
    product_price: "143.00",
    product_description:
      "Pants Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, dolorum.",
    product_img: "https://loremflickr.com/250/125/dog",
    product_rating: 4,
  },
  {
    id: "2",
    product_name: "Licensed Steel Chicken",
    product_price: "716.00",
    product_description:
      "Bacon Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, dolorum.",
    product_img: "https://loremflickr.com/250/125/dog",
    product_rating: 4.5,
  },
  {
    id: "3",
    product_name: "Generic Steel Hat",
    product_price: "449.00",
    product_description:
      "Computer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, dolorum.",
    product_img: "https://loremflickr.com/250/125/dog",
    product_rating: 5,
  },
  {
    id: "4",
    product_name: "Handmade Fresh Mouse",
    product_price: "426.00",
    product_description:
      "Soap Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, dolorum.",
    product_img: "https://loremflickr.com/250/125/dog",
    product_rating: "3",
  },
  {
    id: "5",
    product_name: "Licensed Granite Chips",
    product_price: "512.00",
    product_description:
      "Chair Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, dolorum.",
    product_img: "https://loremflickr.com/250/125/dog",
    product_rating: "3.6",
  },
  {
    id: "6",
    product_name: "Intelligent Wooden Keyboard",
    product_price: "731.00",
    product_description:
      "Table Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, dolorum.",
    product_img: "https://loremflickr.com/250/125/dog",
    product_rating: "2.5",
  },
  {
    id: "7",
    product_name: "Handmade Metal Pizza",
    product_price: "999.00",
    product_description:
      "Car Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, dolorum.",
    product_img: "https://loremflickr.com/250/125/dog",
    product_rating: "3",
  },
  {
    id: "8",
    product_name: "Refined Rubber Bike",
    product_price: "499.00",
    product_description:
      "Bacon Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, dolorum.",
    product_img: "https://loremflickr.com/250/125/dog",
    product_rating: "3",
  },
  {
    id: "9",
    product_name: "Incredible Metal Chips",
    product_price: "800.00",
    product_description:
      "Pizza Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, dolorum.",
    product_img: "https://loremflickr.com/250/125/dog",
    product_rating: "3.5",
  },
  {
    id: "10",
    product_name: "Gorgeous Rubber Computer",
    product_price: "357.00",
    product_description:
      "Sausages Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, dolorum.",
    product_img: "https://loremflickr.com/250/125/dog",
    product_rating: "2.4",
  },
  {
    id: "11",
    product_name: "Blazing Fast Processor",
    product_price: "258.99",
    product_description:
      "Sausages Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, dolorum.",
    product_img: "https://loremflickr.com/250/125/dog",
    product_rating: "4.3",
  },
];

const cardRow = document.getElementById("card-row");

productData.forEach((data) => {
  const cardCol = newElement("div", "col-lg-4");
  const card = newElement("div", "card my-3");
  const cardImg = newElement("img", "card-img-top");
  cardImg.setAttribute("src", data.product_img);

  const cardBody = newElement("div", "card-body");
  const cardTitle = newElement("h5", "card-title text-primary");
  cardTitle.innerHTML = data.product_name;

  const cardText = newElement("p", "card-text");
  cardText.innerHTML = data.product_description;

  const cardPrice = newElement("p", "card-text font-weight-bold");
  cardPrice.innerHTML = "$ " + data.product_price;

  cardFooter = newElement("div", "card-footer");
  cardFooterText = newElement("small", "text-muted");
  cardFooterText.innerHTML = totalStars(data);

  cardFooter.append(cardFooterText);
  cardBody.append(cardTitle, cardPrice, cardText);
  card.append(cardImg, cardBody, cardFooter);
  cardCol.append(card);
  cardRow.append(cardCol);
});

function newElement(ele, className = "", eleValue = "") {
  let element = document.createElement(ele);
  element.setAttribute("class", className);
  element.innerHTML = eleValue;
  return element;
}

function totalStars(item) {
  let rating = Math.round(item.product_rating);
  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push('<i class="fas fa-star"></i>');
  }
  return stars.join("");
}
