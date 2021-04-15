let url =
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json";

// creating bootstrap html/css tags/class
let container = createBootstrap("div", "container");
let headRow = createBootstrap("div", "row mt-4");
let bodyRow = createBootstrap("div", "row");
let headCol = createBootstrap("div", "col-lg-12");
let table = createBootstrap("table", "table");
let tHead = createBootstrap("thead", "thead-dark");
let tableRow = createBootstrap("tr");
let thId = document.createElement("th");
thId.setAttribute("scope", "col");
thId.classList.add("w-25", "text-center");
thId.innerHTML = "# Id";
let thName = document.createElement("th");
thName.setAttribute("scope", "col");
thName.classList.add("w-25");
thName.innerHTML = "Name";
let thEmail = document.createElement("th");
thEmail.setAttribute("scope", "col");
thEmail.classList.add("w-25");
thEmail.innerHTML = "Email";
let tBody = createBootstrap("tbody", "table-body");
let numCols = createBootstrap("div", "col-lg-8 text-left");
let prevNextCols = createBootstrap("div", "col-lg-4 text-right");
let prevBtn = createBootstrap("button", "btn btn-primary page-btn");
prevBtn.setAttribute("type", "button");
prevBtn.innerHTML = "Previous";
let nextBtn = createBootstrap("button", "btn btn-primary page-btn");
nextBtn.setAttribute("type", "button");
nextBtn.innerHTML = "Next";

// appending columns into rows and then container
tableRow.append(thId, thName, thEmail);
tHead.append(tableRow);
table.append(tHead, tBody);
headCol.append(table);
headRow.append(headCol);
prevNextCols.append(prevBtn, nextBtn);
bodyRow.append(prevNextCols, numCols);
container.append(headRow, bodyRow);
document.body.append(container);

// Function to create bootstrap element
function createBootstrap(ele, className = "") {
  let element = document.createElement(ele);
  element.setAttribute("class", className);
  return element;
}

// API Data and Functions
fetch(url)
  .then((res) => res.json())
  .then((list_items) => {
    let current_page = 1;
    let preNextPage = 1;
    let rows = 10;

    function dataList(items, wrapper, rows_per_page, page) {
      page--;
      let item_element = "";
      let start = rows_per_page * page;
      let end = start + rows_per_page;
      let paginatedItems = items.slice(start, end);
      for (let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i];
        item_element += `<tr>
            <td class="text-center">${item.id}</td>
            <td>${item.name}</td>
            <td>${item.email}</td>
        </tr>`;
      }
      wrapper.innerHTML = item_element;
    }

    function createBtns(items, wrapper, rows_per_page) {
      wrapper.innerHTML = "";
      let page_count = Math.ceil(items.length / rows_per_page);
      for (let i = 1; i < page_count + 1; i++) {
        let btn = paginationButton(i, items);
        wrapper.appendChild(btn);
      }
    }

    function paginationButton(page, items) {
      let button = createBootstrap("button", "btn btn-primary page-btn");
      button.setAttribute("type", "button");
      button.innerText = page;
      if (current_page == page) button.classList.add("active");
      button.addEventListener("click", () => {
        current_page = page;
        dataList(items, tBody, rows, current_page);
        button.classList.add("active");
        preNextPage = current_page;
      });
      return button;
    }

    prevBtn.addEventListener("click", () => {
      if (preNextPage <= rows && preNextPage > 1) {
        preNextPage--;
        dataList(list_items, tBody, rows, preNextPage);
      }
    });

    nextBtn.addEventListener("click", () => {
      if (preNextPage < rows && preNextPage >= 1) {
        preNextPage++;
        dataList(list_items, tBody, rows, preNextPage);
      }
    });

    dataList(list_items, tBody, rows, current_page);
    createBtns(list_items, numCols, rows);
  });
