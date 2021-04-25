// bootstrap html elements
const container = bootstrap("div", "container");
const row = bootstrap("div", "row");
const col = bootstrap("div", "col");
const form = bootstrap("form", "form");
const input = bootstrap("input", "inline-input");
const para = bootstrap("p", "para");

//element append
form.append(input);
col.append(form, para);
row.appendChild(col);
container.appendChild(row);
document.body.appendChild(container);

// bootstrap function
function bootstrap(ele, className = "") {
  const element = document.createElement(ele);
  element.setAttribute("class", className);
  return element;
}

// Spotify API
const apiURI = "https://www.dictionaryapi.com/api/v3/references/learners/json/";

const apiKEY = "?key=14eb0ec4-dd42-4f5c-a418-f4f08c88a165";
const word = "hola";

fetch(apiURI + word + apiKEY)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

// selector
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = document.querySelector(".inline-input").value;
  const display = value.split(", ");
  const tempArr = [];
  for (let i = 0; i < display.length; i++) {
    console.log(display[0]);
  }
});
