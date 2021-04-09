// Bootstrap html elements
const container = createBootstrap("div", "container");
const colTitle = createBootstrap("div", "mb-3 title");
const title = createBootstrap("h1", "h4 head text-center py-3");
title.innerHTML = "Random Giphy Generator";
title.style.backgroundColor = "black";
title.style.color = "whitesmoke";
const rowCard = createBootstrap("div", "row card-row");
const colCard = createBootstrap("div", "col-md-12");
const card = createBootstrap("div", "card mx-auto");
card.style.width = "22rem";
const imgContainer = createBootstrap("div", "card-img");
imgContainer.style.height = "20rem";
imgContainer.innerHTML = `
          <img src="https://media.giphy.com/media/3oEduTcqgubNJO8xag/giphy.gif" style="height:100%;" class="card-img-top" alt="happy-big-smile">`;
const cardBody = createBootstrap("div", "card-body mx-auto");
const button = createBootstrap("button", "button btn btn-primary");
button.setAttribute("type", "button");
button.innerHTML = "Show Me";
cardBody.append(button);
card.append(imgContainer, cardBody);
colCard.append(card);
colTitle.append(title);
rowCard.append(colCard);
container.append(rowCard);
document.body.append(colTitle, container);

// creating bootstrap html elements
function createBootstrap(ele, className = "") {
  let element = document.createElement(ele);
  element.setAttribute("class", className);
  return element;
}

// api urls and key
const randomUrl = "https://random-word-api.herokuapp.com//word?number=1";
const giphyUrl = "https://api.giphy.com/v1/gifs/search?q=";
const apiKey = "&api_key=YOrFrobTbZln2vz9RNNpA66vwGVuZGsP&limit=1";

// button selector
const showMeBtn = document.querySelector(".button");

//Event listener
showMeBtn.addEventListener("click", () => {
  randomGiphy(randomUrl);
  showMeBtn.classList.toggle("btn-success");
});

// Async function to gen random giphy url
async function randomGiphy(url) {
  try {
    const randomApiUrl = await fetch(url);
    const randomApiJson = await randomApiUrl.json();
    const giphyApiUrl = await fetch(
      giphyUrl + randomApiJson[0].toString() + apiKey
    );
    const giphyApiUrlJson = await giphyApiUrl.json();
    giphyGen(giphyApiUrlJson);
  } catch (error) {
    console.log(error);
  }
}

//Function to display gifhy
function giphyGen(url) {
  const giphyData = url.data;
  if (giphyData.length == "") {
    imgContainer.innerHTML = `
        <img src="https://media.giphy.com/media/3oEduTcqgubNJO8xag/giphy.gif" style="height:100%;" class="card-img-top" alt="happy-big-smile">`;
  } else {
    for (let i = 0; i < giphyData.length; i++) {
      imgContainer.innerHTML = `
          <img src="${giphyData[i].images.fixed_height.url}" class="card-img-top" style="height:100%;" alt="${giphyData[i].title}">`;
    }
  }
}

// button.addEventListener("click", () => {
//   fetch(randomUrl)
//     .then((res) => res.json())
//     .then((word) => {
//       return fetch(giphyUrl + word.toString() + apiKey);
//     })
//     .then((res) => res.json())
//     .then((url) => {
//       giphyGen(url);
//     });
// });
