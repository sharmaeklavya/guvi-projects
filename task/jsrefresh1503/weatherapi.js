console.log("This is a weather api call through longitutde and latitude");
// variable for latitute and longitude
let lat = 28.6448;
let long = 77.216721;

// XML request
let request = new XMLHttpRequest();

// Open a new connection
request.open(
  "GET",
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=c31c65ace258476b516f78f48393a69b`,
  true
);

request.onload = function () {
  // Begin accessing JSON data
  let data = JSON.parse(this.response);
  console.log(data.name);
};

// Send request
request.send();
