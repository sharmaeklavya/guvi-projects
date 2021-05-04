// defining Boostrap html elements
const container = bootstrap("div", "container");
const row = bootstrap("div", "row");
const picCol = bootstrap("div", "col-md-6 ");
const contentCol = bootstrap("div", "col-md-6 content-bg");
const imageDiv = bootstrap("div", "cat-img px-5 pb-5");
const imageContent = bootstrap("h1", "h2 text-warning text-center py-2");
imageContent.innerText = "Interesting Cat Facts";

// Appending container to html body
imageDiv.append(imageContent);
picCol.appendChild(imageDiv);
row.append(picCol, contentCol);
container.appendChild(row);
document.body.appendChild(container);

// function to create bootstrap elements
function bootstrap(ele, className = "") {
  const element = document.createElement(ele);
  element.setAttribute("class", className);
  return element;
}

const catFactsApi = "https://cat-fact.herokuapp.com/facts";
const catImgApi = "https://api.thecatapi.com/v1/images/search";

async function fetchCatFacts(uri) {
  try {
    const getPromise = await fetch(uri);
    const getData = await getPromise.json();
    catFacts(getData);
  } catch {
    console.log("Api error occured");
  }
}

fetchCatFacts(catFactsApi);

function catFacts(facts) {
  facts.map((fact) => {
    const contentDiv = bootstrap(
      "div",
      "content m-5 d-flex align-items-center"
    );
    const content = bootstrap("div", "lead justify-text");
    content.innerText = fact.text;
    const catIcon = bootstrap("div", "cat-icon mr-3");
    catIcon.innerHTML = `<i class="fas fa-cat fa-3x"></i>`;
    contentDiv.append(catIcon, content);
    contentCol.appendChild(contentDiv);
  });
}

async function fetchCatImg(uri) {
  try {
    const getPromise = await fetch(uri);
    const getData = await getPromise.json();
    catImg(getData);
  } catch {
    console.log("Api error occured");
  }
}

fetchCatImg(catImgApi);

function catImg(imgs) {
  imgs.map((img) => {
    const catImg = bootstrap("img", "w-100 h-100 rounded-lg");
    catImg.setAttribute("src", img.url);
    imageDiv.append(catImg);
  });
}
