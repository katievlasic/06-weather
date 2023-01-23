let wCurrent = document.querySelector(".current");
let wFuture = document.querySelector(".future"); // 5-day
let selectCity = document.querySelector(".btn");
let userIn = document.querySelector("#cities").value;

selectCity.addEventListener("click", function () {
  let city = userIn.setAttribute("type", "text");
  console.log("User entered " + userIn);
  let storeKey = "City";
  let storeValue = city;
  localStorage.setItem(storeKey, storeValue);

  let APIKey = "49a476173de1780cf5a9468d5b68d553";
  let queryURL =
    "api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    APIKey;

  if ((city = "Anchorage, AK")) {
    let lat = 61.13; // city.coord.lat
    let lon = 149.54; // city.coord.lon
    // list.wind.speed
    // list.main.temp
    // list.main.humidity
    // list.weather.icon
    fetch(queryURL, {
      method: "GET", //GET is the default.
      credentials: "same-origin", // include, *same-origin, omit
      redirect: "follow", // manual, *follow, error
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }
});

// https://home.openweathermap.org/api_keys
// Base URL: api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// Query Parameters are letters before '='
// ? is a boundary between base URL and API call and query terms
// & adds query parameters
