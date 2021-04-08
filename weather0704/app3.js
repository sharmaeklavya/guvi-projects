// Bootstrap
const container = createBootstrap("div", "container");
const colTitle = createBootstrap("div", "mb-3 title");
const title = createBootstrap("h1", "head text-center");
title.innerHTML = "Weather Info";
const rowSelector = createBootstrap("div", "row");
const colSelector = createBootstrap("div", "col-lg-12");
const inputSelectGroup = createBootstrap("div", "input-group");
const inputSelect = createBootstrap("select", "custom-select");
inputSelect.id = "inputGroupSelect";
inputSelect.innerHTML = `<option value ="Select One" selected disabled>Select One</div>`;

const rowCard = createBootstrap("div", "row mx-auto card-row");

inputSelectGroup.append(inputSelect);
// submitBtnGroup.appendChild(submitBtn);
colSelector.appendChild(inputSelectGroup);
colTitle.append(title);
rowSelector.appendChild(colSelector);
container.append(rowSelector, rowCard);
document.body.append(colTitle, container);

function createBootstrap(ele, className = "") {
  let element = document.createElement(ele);
  element.setAttribute("class", className);
  return element;
}

// count variable
let count = 6;

// Selectors
const selectBar = document.querySelector(".custom-select");
const countryUrl = "https://restcountries.eu/rest/v2/all";

// fetch rest countries api
fetch(countryUrl)
  .then((res) => res.json())
  .then((data) => {
    list(data);
    // Select option value change
    selectBar.addEventListener("change", (e) => {
      const countryName = e.target.value;

      // Getting country capital from the rest country api and using it in weather api
      const countryData = data.filter((d) => d.name === countryName);
      const countryCapital = countryData[0].capital;

      //creating card dynamically upon value change
      card(countryData[0]);
      // Weather api
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${countryCapital}&units=metric&appid=c31c65ace258476b516f78f48393a69b`;
      fetch(weatherUrl)
        .then((res) => res.json())
        .then((data) => cityWeather(data))
        .catch((error) => console.log(error));
    });
  })
  .catch((error) => console.log(error));

// creating select list of countries
function list(countrylist) {
  // displayCard(countrylist);
  countrylist.forEach((country) => {
    const selectOption = document.createElement("option");
    selectOption.setAttribute("value", country.name);
    selectOption.innerHTML = `${country.name}`;
    inputSelect.appendChild(selectOption);
  });
}

//creating card
function card(country) {
  const colCard = createBootstrap("div", "col-md-4 mt-3");
  colCard.innerHTML = `
    <div class="card country-card" style="width: 18rem;">
        <img src="${country.flag}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${country.name}</h5>
            <p class="card-text">Capital: ${country.capital}</p>
            <p class="card-text">Region: ${country.region}</p>
            <p class="card-text">Code: ${country.alpha3Code}</p>
            <button class="button btn btn-primary">Weather</button>
        </div>
      </div>`;
  rowCard.insertBefore(colCard, rowCard.childNodes[0]);
}

// event listener to show capital weather
function cityWeather(city) {
  const weatherBtn = document.querySelector(".button");
  weatherBtn.addEventListener("click", (e) => {
    let btn = e.target;
    btn.innerHTML = `Capital Weather: ${city.main.temp} C<sup>o</sup>`;
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-success");
  });
}
