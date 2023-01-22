// https://home.openweathermap.org/api_keys
let APIKey = "49a476173de1780cf5a9468d5b68d553";
// Base URL: api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// Query Parameters:
let lat;
let lon;
let appid;
// ? is a boundary between base URL and API call and query terms
// & adds query parameters
let queryURL =
  "api.openweathermap.org/data/2.5/forecast?lat=" +
  lat +
  "&lon=" +
  lon +
  "&appid=" +
  APIKey;

fetch(queryURL);

// var request = new XMLHttpRequest()
// request.open('Get','')
