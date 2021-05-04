// defining Boostrap html elements
const container = bootstrap("div", "container-fluid");
const row = bootstrap("div", "row vh-100");
const picCol = bootstrap("div", "col-md-6");
const contentCol = bootstrap("div", "col-md-6 content");

const picContainer = bootstrap("div", "container");
const picContainerRow = bootstrap("div", "row");
const picContainerCol = bootstrap("div", "col-lg-12");

const contentContainer = bootstrap("div", "container");
const contentContainerRow = bootstrap("div", "row");
const contentContainerCol = bootstrap("div", "col-lg-12");

// Appending container to html body
picContainer.append(picContainerRow);
contentContainer.append(contentContainerRow);
picContainerRow.append(picContainerCol);
contentContainerRow.append(contentContainerCol);

picCol.append(picContainer);
contentCol.append(contentContainer);
row.append(picCol, contentCol);
container.appendChild(row);
document.body.appendChild(container);

// function to create bootstrap elements
function bootstrap(ele, className = "") {
  const element = document.createElement(ele);
  element.setAttribute("class", className);
  return element;
}

const apiURI =
  "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1";

async function fetchData(uri) {
  try {
    const getPromise = await fetch(uri);
    const getData = await getPromise.json();
    console.log(getData);
  } catch {
    console.log("Api error occured");
  }
}

fetchData(apiURI);
