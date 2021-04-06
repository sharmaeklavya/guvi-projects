// creating html elements
let userForm = `<form>
<div class="form-row">
  <div class="form-group col-md-6">
    <label for="inputFirstName">First Name</label>
    <input type="text" name="firstName" class="form-control" id="inputFirstName" placeholder="First Name" required>
  </div>
  <div class="form-group col-md-6">
    <label for="inputLastName">Last Name</label>
    <input type="text" name="lastName" class="form-control" id="inputLastName" placeholder="Last Name" required>
  </div>  
</div>

<div class="form-row">
    <div class="form-group col-md-6">
        <div class="form-check form-check-inline">    
            <input class="form-check-input" type="radio" name="gender" id="maleRadio" value="Male" required>
            <label class="form-check-label" for="maleRadio">Male</label>
        </div>
    </div>
    <div class="form-group col-md-6">
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="gender" id="femaleRadio" value="Female">
            <label class="form-check-label" for="femaleRadio">Female</label>
        </div>
    </div>
</div>

<div class="form-group">
    <p>Favorite food: <span class="required"></span></p>
</div>

<div class="form-row">
    <div class="form-group col-md-4">        
        <div class="form-check form-check-inline">    
            <input class="form-check-input multi-choice" type="checkbox" name="food" id="inlineBrownies" value="Brownies">
            <label class="form-check-label" for="inlineBrownies">Brownies</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input multi-choice" type="checkbox" name="food" id="inlineUdon" value="Udon">
            <label class="form-check-label" for="inlineUdon">Udon</label>
        </div>
    </div>
    <div class="form-group col-md-4">
        <div class="form-check form-check-inline">
            <input class="form-check-input multi-choice" type="checkbox" name="food" id="inlineSpaghetti" value="Spaghetti">
            <label class="form-check-label" for="inlineSpaghetti">Spaghetti</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input multi-choice" type="checkbox" name="food" id="inlineDumplings" value="Dumplings">
            <label class="form-check-label" for="inlineDumplings">Dumplings</label>
        </div>
    </div>
    <div class="form-group col-md-4">
        <div class="form-check form-check-inline">
            <input class="form-check-input multi-choice" type="checkbox" name="food" id="inlineSushi" value="Sushi">
            <label class="form-check-label" for="inlineSushi">Sushi</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input multi-choice" type="checkbox" name="food" id="inlineTortilla" value="Tortila">
            <label class="form-check-label" for="inlineTortilla">Tortilla</label>
        </div>
    </div>
</div>

<div class="form-group">
  <label for="inputAddress">Address</label>
  <input type="text" name="address1" class="form-control" id="inputAddress" placeholder="1234 Main St" required>
</div>
<div class="form-group">
  <label for="inputAddress2">Address 2</label>
  <input type="text" name="address2" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
</div>

<div class="form-row">
  <div class="form-group col-md-6">
    <label for="inputCity">City</label>
    <input type="text" name="city" class="form-control" id="inputCity" required>
  </div>

  <div class="form-group col-md-6">
    <label for="inputState">State</label>
    <select id="inputState" name="state" class="form-control" required>
    <option value="Select one" disabled selected>Select One</option>
    <option value="Andhra Pradesh">Andhra Pradesh</option>
    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
    <option value="Assam">Assam</option>
    <option value="Bihar">Bihar</option>
    <option value="Chandigarh">Chandigarh</option>
    <option value="Chhattisgarh">Chhattisgarh</option>
    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
    <option value="Daman and Diu">Daman and Diu</option>
    <option value="Delhi">Delhi</option>
    <option value="Lakshadweep">Lakshadweep</option>
    <option value="Puducherry">Puducherry</option>
    <option value="Goa">Goa</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Haryana">Haryana</option>
    <option value="Himachal Pradesh">Himachal Pradesh</option>
    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
    <option value="Jharkhand">Jharkhand</option>
    <option value="Karnataka">Karnataka</option>
    <option value="Kerala">Kerala</option>
    <option value="Madhya Pradesh">Madhya Pradesh</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Manipur">Manipur</option>
    <option value="Meghalaya">Meghalaya</option>
    <option value="Mizoram">Mizoram</option>
    <option value="Nagaland">Nagaland</option>
    <option value="Odisha">Odisha</option>
    <option value="Punjab">Punjab</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Sikkim">Sikkim</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Telangana">Telangana</option>
    <option value="Tripura">Tripura</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="Uttarakhand">Uttarakhand</option>
    <option value="West Bengal">West Bengal</option>
    </select>
  </div>  
</div>

<div class="form-row">
<div class="form-group col-md-6">
    <label for="inputPin">Pin Code</label>
    <input type="text" name="pin" class="form-control" id="inputPin" required>
  </div>  
  <div class="form-group col-md-6">
    <label for="inputCity">Country</label>
    <input type="text" name="country" class="form-control" id="inputCountry" placeholder="India" disabled>
  </div> 
</div>
<button type="submit" class="btn btn-primary button">Submit</button>
</form>`;

let container = createBootstrap("div", "container-lg px-5");
let row = createBootstrap("div", "row mt-5");
let formCol = createBootstrap("div", "col-lg-12 mt-2");
formCol.innerHTML = userForm;
let tableCol = createBootstrap("div", "col-lg-12 mt-2 d-none");
let table = createBootstrap("table", "table");
let tHead = createBootstrap("thead");
let tBody = createBootstrap("tbody");
let trHead = createBootstrap("tr");

let thId = document.createElement("th");
thId.setAttribute("scope", "col");
thId.setAttribute("class", "p-2");
thId.innerHTML = "ID";

let thFirstName = document.createElement("th");
thFirstName.setAttribute("scope", "col");
thFirstName.setAttribute("class", "p-2");
thFirstName.innerHTML = "First Name";

let thLastName = document.createElement("th");
thLastName.setAttribute("scope", "col");
thLastName.setAttribute("class", "p-2");
thLastName.innerHTML = "Last Name";

let thGender = document.createElement("th");
thGender.setAttribute("scope", "col");
thGender.setAttribute("class", "p-2");
thGender.innerHTML = "Gender";

let thFood = document.createElement("th");
thFood.setAttribute("scope", "col");
thFood.setAttribute("class", "p-2");
thFood.innerHTML = "Favorite Food";

let thAddress = document.createElement("th");
thAddress.setAttribute("scope", "col");
thAddress.setAttribute("class", "p-2");
thAddress.innerHTML = "Address";

let thCity = document.createElement("th");
thCity.setAttribute("scope", "col");
thCity.setAttribute("class", "p-2");
thCity.innerHTML = "City";

let thPin = document.createElement("th");
thPin.setAttribute("scope", "col");
thPin.setAttribute("class", "p-2");
thPin.innerHTML = "Pin";

let thState = document.createElement("th");
thState.setAttribute("scope", "col");
thState.setAttribute("class", "p-2");
thState.innerHTML = "State";

trHead.append(
  thId,
  thFirstName,
  thLastName,
  thGender,
  thFood,
  thAddress,
  thCity,
  thPin,
  thState
);

tHead.append(trHead);
table.append(tHead, tBody);
tableCol.append(table);
row.append(formCol, tableCol);
container.append(row);
document.body.append(container);

function createBootstrap(ele, className = "") {
  let element = document.createElement(ele);
  element.setAttribute("class", className);
  return element;
}

// selectors
const form = document.querySelector("form");
const checkboxes = document.querySelectorAll(".multi-choice");
const checkboxeRequired = document.querySelector(".required");
const state = document.querySelector("#inputState");

// serial number count
let count = 1;

// form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const checkboxOne = Array.prototype.slice
    .call(checkboxes)
    .some((x) => x.checked);

  if (checkboxOne === true) {
    layout();
    checkboxeRequired.innerHTML = "";
    let fd = new FormData(form);
    let fav_food = fd.getAll("food").join(", ");
    let tBodyRow = document.createElement("tr");
    tBodyRow.innerHTML = `<tr>
        <td class="p-2">${count}</td>
        <td class="p-2">${fd.get("firstName")}</td>
        <td class="p-2">${fd.get("lastName")}</td>
        <td class="p-2">${fd.get("gender")}</td>
        <td class="p-2">${fav_food}</td>  
        <td class="p-2">${fd.get("address1")}, ${fd.get("address2")}</td>
        <td class="p-2">${fd.get("city")}</td>
        <td class="p-2">${fd.get("pin")}</td>
        <td class="p-2">${fd.get("state")}</td>  
      </tr>`;
    tBody.append(tBodyRow);
    form.reset();
    count++;
  } else {
    checkboxeRequired.style.fontSize = "11px";
    checkboxeRequired.style.color = "red";
    checkboxeRequired.innerHTML = "Please check atleast one checkbox";
  }
});

function layout() {
  container.classList.remove("container-lg");
  container.classList.add("container-fluid");
  formCol.classList.remove("col-lg-12");
  formCol.classList.add("col-lg-6");
  tableCol.classList.remove("col-lg-12");
  tableCol.classList.remove("d-none");
  tableCol.classList.add("col-lg-6");
}
