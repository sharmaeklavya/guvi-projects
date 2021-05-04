// selectors
const baseCurrency = document.querySelector(".base__currency");
const selectCurrency = document.getElementById("inputGroupSelect");
const form = document.querySelector("form");
const inputBaseRate = document.getElementById("inputBaseRate");
const inputExchangeRate = document.getElementById("inputExchangeRate");

//API URI
const currencyApiUri = "https://api.ratesapi.io/api/latest";

//Fetch API Data
async function fetchCurrencyApi(uri) {
  try {
    const getResponse = await fetch(uri);
    const getData = await getResponse.json();
    currencyMap(getData);
  } catch {
    console.log("Api error occured");
  }
}
fetchCurrencyApi(currencyApiUri);

function currencyMap(currency) {
  baseCurrency.innerHTML = currency.base;
  for (let mudra in currency.rates) {
    const createSelect = document.createElement("option");
    createSelect.setAttribute("value", mudra);
    createSelect.innerText = mudra;
    selectCurrency.appendChild(createSelect);
  }
  currencyConverter(currency);
}

function currencyConverter(currency) {
  form.addEventListener("change", (e) => {
    e.preventDefault();
    const baseRate = inputBaseRate.value;
    const exchangeCurrency = selectCurrency.value;
    for (let mudra in currency.rates) {
      if (exchangeCurrency == mudra) {
        const value = baseRate * currency.rates[mudra];
        inputExchangeRate.value = `${mudra} ${+value.toFixed(2)}`;
      }
    }
  });
}
