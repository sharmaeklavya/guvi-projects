//selector
const form = document.querySelector("form");
const cardRow = document.querySelector(".card__row");

//Dictionary API
async function apiCall(word) {
  const promise = await fetch(apiURI + word + apiKEY);
  const json = await promise.json();
  console.log(json);
  cardRow.innerHTML = "";

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
    cardRow.appendChild(cardCol);
  }
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
