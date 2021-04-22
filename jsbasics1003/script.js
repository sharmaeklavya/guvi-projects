const restAPI = "https://restcountries.eu/rest/v2/all";

fetch(restAPI)
  .then((res) => res.json())
  .then((countryData) =>
    countryData.forEach((country) => {
      console.log(country.name);
    })
  );
