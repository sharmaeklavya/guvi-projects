//Bootstrap HTML elments
const container = bootstrap("div", "container");
const hrTag = bootstrap("hr", "hr-tag");
// Top Header
const headerRow = bootstrap("div", "row");
const headerCol = bootstrap("div", "col-md-12 text-center border-bottom py-3");
const headerTitle = bootstrap("p", "h2 head-title");
headerTitle.innerHTML = "News Times";
const headerDate = bootstrap("p", "h6");
headerDate.innerHTML = `${toDaysDate()}`;
//Top Header append
headerCol.append(headerTitle, headerDate);
headerRow.append(headerCol);
//Section Bar - navbar
const navRow = bootstrap("div", "row");
const navCol = bootstrap("div", "col-md-12 border-bottom py-2");
const navBar = bootstrap("nav", "navbar-expand-lg navbar-light ");
navBar.innerHTML = `<button class="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>`;
const navbar_collapse = bootstrap("div", "collapse navbar-collapse");
navbar_collapse.id = "navbarSupportedContent";
const navbarList = bootstrap("ul", "navbar-nav navbar-list mx-auto");
// const navbarSearchForm = bootstrap("form", "form-inline my-2 my-lg-0 ");
// navbarSearchForm.innerHTML = `<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">`;
//Section Bar append
navBar.append(navbar_collapse);
navCol.append(navBar);
navRow.append(navCol);
//main content holder
const mainContentRow = bootstrap(
  "div",
  "row no-gutters mt-3 d-flex justify-content-center"
);
//left side bar
const leftSidebarCol = bootstrap("div", "col-md-3");
// miidle content
const centerCol = bootstrap("div", "col-md-6 mx-3");
// right side bar
const rightSidebarCol = bootstrap("div", "col-md-2");
mainContentRow.append(leftSidebarCol, centerCol, rightSidebarCol);
console.log(mainContentRow);
// Main container append
container.append(headerRow, navRow, mainContentRow);
document.body.append(container);
// function to create Boostrap elments
function bootstrap(ele, className = "") {
  const element = document.createElement(ele);
  element.setAttribute("class", className);
  return element;
}

//function to display today's date
function toDaysDate() {
  const toDay = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const month = toDay.getMonth();
  const date = toDay.getDate();
  const year = toDay.getFullYear();
  const day = toDay.getDay();
  const dayAndDate = `${days[day]}, ${months[month]} ${date}, ${year}`;
  return dayAndDate;
}

//API url, API Key and News Sections
const api_base_url = "https://api.nytimes.com/svc/topstories/v2/";
const api_key = ".json?api-key=WW0GG7eJbNHq5VFl3pmuLJiVey6VGAKJ";
const news_section = [
  "world",
  "politics",
  "magazine",
  "technology",
  "science",
  "health",
  "sports",
  "arts",
  "fashion",
  "food",
  "travel",
];

// Function to create navigation bar with news section
function navigationBar(sections) {
  const navbarItemActive = bootstrap("li", "nav-item active ");
  navbarItemActive.innerHTML = `<a class="nav-link navbar-link" href="#">home<span class="sr-only"></span></a>`;
  let navbarItemList = [];
  sections.forEach((section) => {
    const navbarItems = bootstrap("li", "nav-item");
    navbarItems.innerHTML = `<a class="nav-link navbar-link" href="#">${section}</a>`;
    navbarItemList.push(navbarItems);
  });
  navbarList.append(navbarItemActive, ...navbarItemList);
  navbar_collapse.append(navbarList);
}
navigationBar(news_section);

// navbar link selector and add event listener
const navbar_link = document.querySelectorAll(".navbar-link");

navbar_link.forEach((link) => {
  link.addEventListener("click", () => {
    dataFromNYApi(api_base_url, link.textContent, api_key);
  });
});

// Async function to fetch the data related to news section array topics
async function dataFromNYApi(baseUrl, section, key) {
  try {
    const final_api_url = await fetch(baseUrl + section + key);
    const api_json = await final_api_url.json();
    newsData(api_json);
  } catch {
    console.log("Api error occured");
  }
}
//function to get the home page
function homePage(baseUrl, key) {
  fetch(baseUrl + "home" + key)
    .then((res) => res.json())
    .then((data) => {
      newsData(data);
    });
}
homePage(api_base_url, api_key);

//function to collect news data and renders it to the web sections
function newsData(data) {
  const results = data.results;
  leftSidebarCol.innerHTML = "";
  rightSidebarCol.innerHTML = "";
  centerCol.innerHTML = "";
  newsLeft(results);
  newsCenter(results);
  newsRight(results);
}

// function to display news on the left
function newsLeft(news) {
  for (let i = 2; i < 5; i++) {
    const row = bootstrap("div", "row");
    const col = bootstrap("div", "col-md-12");
    col.innerHTML = `<div class="card mb-3" style="max-width: 540px">
  <div class="row no-gutters border-bottom pb-3">
    <div class="col-md-7">
      <div class="card-body p-3">
        <span class="card-text text-size px-2 border-right">${
          news[i].section
        }</span>
        <span class="card-text text-size px-2">${news[i].item_type}</span>
        <h5 class="h6 mt-2">${news[i].title}</h5>
        <p class="card-text text-size">${news[i].abstract}</p>
        <p class="card-text text-size"><a class="a-link" href="${
          news[i].url
        }" target="_blank">Continue reading...</a></p>
        <p class="card-text text-size">${news[i].byline}</p>
      </div>
    </div>
    <div class="col-md-5">
      <img src="${news[i].multimedia[3].url}"
      class="card-img h-75 my-3" style="object-fit:cover;"
      alt="${news[i].title}"
      />
      <p class="card-text text-size pl-3">Last updated: <br/>${
        news[i].updated_date.split("T")[0]
      }</p>
    </div>
  </div>
</div>`;
    row.append(col);
    leftSidebarCol.append(row);
  }
}

// function to display news in the middle
function newsCenter(news) {
  for (let i = 0; i <= 1; i++) {
    const row = bootstrap("div", "row");
    const col = bootstrap("div", "col-md-12");
    col.innerHTML = `<div class="card mb-3">
    <div class="row no-gutters border-bottom pb-3">
      <div class="col-md-12">
        <div class='news-type text-center my-1'>
          <span class="card-text text-size px-2 border-right">${
            news[i].section
          }</span>
          <span class="card-text text-size px-2">${news[i].item_type}</span>
        </div>
        <div class="news-img" style="height: 18rem;">
          <img src="${news[i].multimedia[0].url}"
          class="card-img h-100" style="object-fit:cover";
          alt="${news[i].title}"
          />
        </div>
      </div>
      <div class="col-md-12">
        <div class="card-body">
          <h5 class="h3">${news[i].title}</h5>
          <p class="card-text text-size">${news[i].abstract}</p>
          <p class="card-text text-size"><a class="a-link" href="${
            news[i].url
          }" target="_blank">Continue reading...</a></p>
          <span class="card-text text-size pr-3 border-right">${
            news[i].byline
          }</span>
          <span class="card-text text-size pl-3">Last updated: ${
            news[i].updated_date.split("T")[0]
          }</span>
        </div>
    </div>
  </div>
</div>`;
    row.append(col);
    centerCol.append(row);
  }
}

// function to display news on the right
function newsRight(news) {
  for (let i = 6; i < 10; i++) {
    const row = bootstrap("div", "row");
    const col = bootstrap("div", "col-md-12");
    col.innerHTML = `<div class="card mb-3" style="max-width: 540px">
      <div class="row no-gutters border-bottom pb-3">
        <div class='news-type text-center w-100 my-1'>
          <span class="card-text text-size px-2 border-right">${
            news[i].section
          }</span>
          <span class="card-text text-size px-2">${news[i].item_type}</span>
        </div>
      <div class="col-md-6">
        <div class="news-img h-75">
          <img src="${news[i].multimedia[3].url}"
          class="card-img h-100 my-3" style="object-fit:cover;"
          alt="${news[i].title}"
          />
        </div>
      </div>
    <div class="col-md-6">
      <div class="card-body p-2 ">
        <h5 class="h6 mt-2"><a class="a-link" href="${
          news[i].url
        }" target="_blank">${news[i].title}</a></h5>    
      </div>
    </div>
    <div class="news-type text-center" style="width:90%;">
      <p class="card-text text-size">${news[i].byline}</p>
      <p class="card-text text-size">Last updated: ${
        news[i].updated_date.split("T")[0]
      }</p>
    </div>
  </div>
</div>`;
    row.append(col);
    rightSidebarCol.append(row);
  }
}
