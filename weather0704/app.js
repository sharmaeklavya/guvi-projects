// Bootstrap
const container = createBootstrap("div", "container");
const colTitle = createBootstrap("div", "mb-3 title");
const title = createBootstrap("h1", "head text-center");
title.innerHTML = "Weather Info";
const rowCard = createBootstrap("div", "row mx-auto card-row");

colTitle.append(title);
container.append(rowCard);
document.body.append(colTitle, container);

// create bootstrap html elements
function createBootstrap(ele, className = "") {
  let element = document.createElement(ele);
  element.setAttribute("class", className);
  return element;
}

// Rest Country API URL
const countryUrl = "https://restcountries.eu/rest/v2/all";

// creating cards
fetch(countryUrl)
  .then((res) => res.json())
  .then((countrydata) => {
    for (let i = 0; i < countrydata.length; i++) {
      const colCard = createBootstrap("div", "col-md-4 my-3");
      const card = createBootstrap("div", "card mx-auto");
      card.style.width = "18rem";
      const image = createBootstrap("img", "card-img-top");
      image.src = `${countrydata[i].flag}`;
      image.alt = `${countrydata[i].name}`;
      const card_body = createBootstrap("div", "card-body");
      const title = createBootstrap("h5", "card-title");
      title.innerHTML = `${countrydata[i].name}`;
      const capitalCity = createBootstrap("p", "card-text");
      capitalCity.innerHTML = `Capital: ${countrydata[i].capital}`;
      const region = createBootstrap("p", "card-text");
      region.innerHTML = `Region: ${countrydata[i].region}`;
      const code = createBootstrap("p", "card-text");
      code.innerHTML = `Code: ${countrydata[i].alpha3Code}`;
      const button = createBootstrap("button", "button btn btn-primary");
      button.dataset.id = `${countrydata[i].capital}`;
      button.innerHTML = "Weather";
      button.addEventListener("click", () => {
        cityWeather(countrydata[i], button);
      });
      card_body.append(title, capitalCity, region, code, button);
      card.append(image, card_body);
      colCard.append(card);
      rowCard.append(colCard);
    }
  })
  .catch((error) => console.log(error));

// weather
function cityWeather(city, btn) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.capital}&units=metric&appid=c31c65ace258476b516f78f48393a69b`;
  fetch(weatherUrl)
    .then((res) => res.json())
    .then((data) => {
      btn.innerHTML = `Capital Weather: ${data.main.temp} C<sup>o</sup>`;
      btn.classList.remove("btn-primary");
      btn.classList.add("btn-success");
    })
    .catch((error) => console.log(error));
}
