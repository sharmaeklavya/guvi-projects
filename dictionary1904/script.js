//selectors
const form = document.querySelector("form");
const cardRow = document.querySelector(".card__row");
const listGroup = document.querySelector(".list__group");
const monthWord = document.querySelector(".month-word");

//Dictionary API call
async function apiCall(word) {
  const promise = await fetch(apiURI + word + apiKEY);
  const json = await promise.json();
  searchWords(json);
}

// Event Listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = document.querySelector(".form__control").value;
  apiCall(value);
});

monthWord.addEventListener("click", () => {
  apiCall(iWords[randomNum()].name);
});

// Resuable Functions
function bootstrap(ele, className = "") {
  const element = document.createElement(ele);
  element.setAttribute("class", className);
  return element;
}

function randomNum() {
  const random = Math.floor(Math.random() * iWords.length);
  return random;
}

function card(col, body) {
  const cardCol = bootstrap("div", "col-lg-" + col);
  const card = bootstrap("div", "card mt-4");
  const cardBody = bootstrap("div", "card-body overflow-auto");
  cardBody.style.height = "15rem";
  cardBody.innerHTML = body;
  card.appendChild(cardBody);
  cardCol.appendChild(card);
  cardRow.appendChild(cardCol);
}

// function to search words
function searchWords(words) {
  cardRow.innerHTML = "";
  if (words.length === 0) {
    const notFound = `<h5 class="card-title">No Result Found... try searching with different keyword.</h5>`;
    card(12, notFound);
  } else if (typeof words[0] === "string") {
    const youMean = `<h5 class="card-title text-center">Did you mean?</h5>`;
    let btns = [];
    for (let i = 0; i < words.length; i++) {
      const btn = `<button type="button" class="suggest-btn btn btn-primary m-2">${words[i]} </button>`;
      btns.push(btn);
    }
    btns = youMean + btns.join("");
    card(12, btns);
  } else {
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const searchText = `<h5 class="card-title">${word.hwi.hw}</h5>
        <p class="card-text">${word.fl}</p>
        <p class="card-text">${word.shortdef}</p>`;
      card(6, searchText);
    }
  }
  const suggest__btn = document.querySelectorAll(".suggest-btn");
  suggestionSearch(suggest__btn);
}

// function to suggest words results
function suggestionSearch(btns) {
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const value = e.target.innerText;
      apiCall(value);
    });
  });
}

//function to display interesting words
function interestingWords(words) {
  for (let i = 0; i < 3; i++) {
    const word = words[randomNum()];
    const listItem = bootstrap("li", "list-group-item");
    listItem.innerHTML = `<span><i class="far fa-arrow-right mr-2"></i></span>
    <span>${word.name}</span>
    <small class="d-block pl-4">${word.def}</small>`;
    listGroup.appendChild(listItem);
  }
  cardRow.innerHTML = "";
  const word = words[randomNum()];
  const cardCol = bootstrap("div", "col-lg-12");
  const card = bootstrap("div", "card mt-4");
  const cardBody = bootstrap("div", "card-body overflow-auto");
  cardBody.style.height = "15rem";
  cardBody.innerHTML = `<h5 class="card-title">${word.name}</h5>
      <p class="card-text">${word.def}</p>
      <div class="img-contain">
        <img src="images/learn.jpeg" class="word-img w-100 h-100" alt="word-image" />
      </div>
      `;
  card.appendChild(cardBody);
  cardCol.appendChild(card);
  cardRow.appendChild(cardCol);
}
interestingWords(iWords);
