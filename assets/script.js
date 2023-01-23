let wCurrent = document.querySelector(".current");
let wFuture = document.querySelector(".future"); // 5-day
let selectCity = document.querySelector(".btn");
let searchBar = document.querySelector(".searchbar");
let userIn = document.querySelector("#cities");
let appid = "49a476173de1780cf5a9468d5b68d553";
let storeKey = "City";
let storeGet = JSON.parse(localStorage.getItem(storeKey)) || []; // if user hasn't entered anything, provide empty array to start

selectCity.addEventListener("click", function (event) {
  event.preventDefault(); // button type submit prompts refresh of page
  let city = userIn.value;
  console.log("User entered " + city);
  storeGet.push(city); // update array using array method push to add city entered
  localStorage.setItem(storeKey, JSON.stringify(storeGet));
  searchBar.append(storeGet);
  currentForecast(city); // handoff city to function
});

let currentForecast = function (city) {
  let queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    appid +
    "&units=imperial";
  fetch(queryURL, {
    method: "GET", //GET is the default.
    credentials: "same-origin", // include, *same-origin, omit
    redirect: "follow", // manual, *follow, error
  })
    .then(function (response) {
      return response.json(); // console log response before returning to troubleshoot! See what server is sending you
    })
    .then(function (data) {
      console.log(data);
      forecast(data.coord.lat, data.coord.lon);
      document.getElementById("cityName").textContent = data.name;
    });
};

let forecast = function (lat, lon) {
  let queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    appid +
    "&units=imperial";
  fetch(queryURL, {
    method: "GET",
    credentials: "same-origin",
    redirect: "follow",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
};

// https://home.openweathermap.org/api_keys
// Base URL: api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// Query Parameters are letters before '='
// ? is a boundary between base URL and API call and query terms
// & adds query parameters

// fetch call: Get built in, redirect not needed for this one
