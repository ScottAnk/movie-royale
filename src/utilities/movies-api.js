import sendRequest from './send-request'

console.log(process.env.REACT_APP_API_KEY)

// RAPID API

// api requests for movies

const axios = require("axios");
// const BASE_URL = 'https://imdb-top-100-movies.p.rapidapi.com/'

const options = {
  method: 'GET',
  url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

export function getMovies() {

  axios.request(options)
    .then(function (response) {
      console.log(response.data);
  })
    .catch(function (error) {
    console.error(error);
  });
}

// export function getPosters() {
//   fetch(BASE_URL, options)
//   .then((response) => response.json())
//   .then((response) => console.log(response.results))
//   .catch((err) => console.error(err))
// }






