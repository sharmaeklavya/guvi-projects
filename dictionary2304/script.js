//selector
const form = document.querySelector("form");
const cardRow = document.querySelector(".card__row");

//Dictionary API
const apiURI = "https://www.dictionaryapi.com/api/v3/references/learners/json/";
const apiKEY = "?key=14eb0ec4-dd42-4f5c-a418-f4f08c88a165";

async function apiCall(word) {
  const call = await fetch(apiURI + word + apiKEY);
  const json = await call.json();
  console.log(json);
  let tempArr = [];
  for (let i = 0; i < json.length; i++) {
    const cardCol = bootstrap("div", "col-lg-6");
    const card = bootstrap("div", "card mt-4");
    const cardBody = bootstrap("div", "card-body");
    cardBody.style.height = "15rem";
    cardBody.innerHTML = `<h5 class="card-title">${json[i].hwi.hw}</h5>
      <p class="card-text">${json[i].fl}</p>
      <p class="card-text">${json[i].shortdef}</p>`;
    card.appendChild(cardBody);
    cardCol.appendChild(card);
    tempArr.push(cardCol);
  }
  cardRow.replaceWith(...tempArr);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = document.querySelector(".form__control").value;
  apiCall(value);
});

function bootstrap(ele, className = "") {
  const element = document.createElement(ele);
  element.setAttribute("class", className);
  return element;
}
