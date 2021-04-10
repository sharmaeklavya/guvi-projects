// Bootstrap html elements
const container = createBootstrap("div", "container box");
//Title section
const titleRow = createBootstrap("div", "row");
const titleCol = createBootstrap("div", "col-md-12 text-center mt-5");
const titleHead = createBootstrap("h1", "h1 siteHead");
titleHead.innerText = "Hello, Stranger!";
const subTitleHead = createBootstrap("h2", "h5");
subTitleHead.innerText = "Want to eat healthy food?";
//title append
titleCol.append(titleHead, subTitleHead);
titleRow.append(titleCol);
//search bar section
const searchRow = createBootstrap("div", "row");
const searchCol = createBootstrap("div", "col-md-12 mt-3");
const searchForm = createBootstrap(
  "form",
  "form-inline d-flex justify-content-center"
);
const inputSearchForm = createBootstrap("input", "form-control mr-sm-2");
inputSearchForm.setAttribute("type", "search");
inputSearchForm.placeholder = "Search now to end your cravings...";
inputSearchForm.style.width = "70%";
const buttonSearchForm = createBootstrap(
  "button",
  "btn btn-outline-success my-2 my-sm-0"
);
buttonSearchForm.setAttribute("type", "submit");
buttonSearchForm.innerText = "Submit";
// search append
searchForm.append(inputSearchForm, buttonSearchForm);
searchCol.append(searchForm);
searchRow.append(searchCol);
//card - section
const cardRow = createBootstrap("div", "row");
const cardCol = createBootstrap("div", "col-md-12 mt-3");
const cardDeck = createBootstrap("div", "card-deck");
const cardDeckTitleRow = createBootstrap("div", "row");
const cardDeckTitle = createBootstrap("div", "col-md-12 ml-3 my-3");
const cardDeckRow = createBootstrap("div", "row");
// card append
cardDeckTitleRow.append(cardDeckTitle);
cardDeck.append(cardDeckTitleRow, cardDeckRow);
cardCol.append(cardDeck);
cardRow.append(cardCol);
container.append(titleRow, searchRow, cardRow);
// container append to the body
document.body.append(container);

// function to create bootstrap html elements
function createBootstrap(ele, className = "") {
  let element = document.createElement(ele);
  element.setAttribute("class", className);
  return element;
}

// Api url and key
const apiId = "&app_id=a9f695f1";
const apiKey = "&app_key=cfb5e736d30f9c5967c33bdeb95d2cca";
const api_base_url = "https://api.edamam.com/search?q=";

// search form event listener
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  container.classList.remove("box");
  titleHead.innerHTML = `Welcome, Stranger`;
  subTitleHead.innerHTML = "Hope, you find things you are looking for";
  cardDeckRow.innerHTML = "";
  const value = inputSearchForm.value;
  // collecting input value from form
  fetchRecipeApiData(api_base_url, value);
});

// Async function to fetch data from food API
async function fetchRecipeApiData(url, foodItem) {
  try {
    const api = await fetch(url + foodItem + apiId + apiKey);
    const api_obj = await api.json();
    //exporting api data to following function
    searchByLabel(api_obj);
  } catch {
    console.log("Api error occured");
  }
}

// function to create health lables/type
function searchByLabel(label) {
  const health_label = label.hits;
  const dietType = [];
  for (let i = 0; i < health_label.length; i++) {
    dietType.push(health_label[i].recipe.healthLabels);
  }
  const cardArr = randomLabel(health_label.length, dietType);
  cardArr.forEach((card) => {
    const cardContainerCol = createBootstrap(
      "div",
      "col-md-4 col-lg-3 d-flex justify-content-center"
    );
    const cardContainer = createBootstrap("div", "card rounded-lg my-2");
    cardContainer.innerHTML = `<div class="card-body">
    <p class="card-text card-extra-text">${card}</p>    
  </div>`;
    randomBgColor(cardContainer);
    cardContainerCol.append(cardContainer);
    cardDeckRow.append(cardContainerCol);
    cardDeckTitle.innerHTML = `<h3 class="h6">Choose your type:</h3>`;
  });
  foodCards(cardArr, health_label);
}

// function to create food Item Cards when click on health labels
function foodCards(cardArr, health_label) {
  const card_body = document.querySelectorAll(".card-body");
  card_body.forEach((card) => {
    card.addEventListener("click", () => {
      let cuisineArr = [];
      for (let i = 0; i < health_label.length; i++) {
        if (health_label[i].recipe.healthLabels.includes(card.innerText)) {
          const cuisine = health_label[i].recipe;
          createCuisineCards(cuisine, cuisineArr);
        }
      }
      cardDeckRow.innerHTML = "";
      cardDeckTitle.innerHTML = "";
      cardDeckRow.append(...cuisineArr);
    });
  });
}

// function to create bootstrap styling for food item cards
function createCuisineCards(cuisine, cuisineArr) {
  const cuisineContainerCol = createBootstrap("div", "col-md-6 col-lg-4");
  const cuisineContainer = createBootstrap("div", "card rounded-lg my-2");
  cuisineContainer.style.width = "18rem;";

  const cuisineImg = createBootstrap("img", "card-img-top");
  cuisineImg.setAttribute("src", cuisine.image);
  cuisineImg.alt = cuisine.label;

  const cuisineTitle = createBootstrap("div", "card-body");
  cuisineTitle.innerHTML = `<h5 class="card-title">${cuisine.label}</h5>`;
  const cuisineList = createBootstrap("ul", "list-group list-group-flush");

  cuisineList.innerHTML = `  
    <li class="list-group-item">Cuisine Type: ${
      cuisine.cuisineType !== undefined ? cuisine.cuisineType : "Not Available"
    }</li>
    <li class="list-group-item">Meal Type: ${
      cuisine.mealType !== undefined ? cuisine.mealType : "Not Available"
    }</li>
    <li class="list-group-item">Calories: ${
      cuisine.calories !== undefined
        ? Math.floor(cuisine.calories)
        : "Not Available"
    } Kcals</li>
    <li class="list-group-item">Diet Type: ${
      cuisine.dietLabels !== undefined || cuisine.dietLabels !== ""
        ? cuisine.dietLabels
        : "Not Available"
    }</li>
    <li class="list-group-item font-weight-bold">Ingredients: </li>
  `;

  const ingredientsList = cuisine.ingredients;
  const ingredientsItem = ingredientsList.map((ing) => {
    const ingre_dients = createBootstrap("ul", "list-group-item ml-2");
    ingre_dients.innerHTML = ing.text;
    return ingre_dients;
  });

  cuisineList.append(...ingredientsItem);
  cuisineContainer.append(cuisineImg, cuisineTitle, cuisineList);
  cuisineContainerCol.append(cuisineContainer);
  cuisineArr.push(cuisineContainerCol);
}

// function to display random health labels
function randomLabel(num, label) {
  const randomNum = Math.floor(Math.random() * num);
  return label[randomNum];
}

// function to create random backgroundColor for health labels
function randomBgColor(card) {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  card.style.backgroundColor = `rgba(${r},${g},${b},0.5)`;
}
