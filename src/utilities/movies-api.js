import sendRequest from './send-request'

console.log(process.env.REACT_APP_API_KEY)

// RAPID API

// api requests for movies
const BASE_URL = 'https://moviesdatabase.p.rapidapi.com/titles?limit=10&page=10'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
  },
}

export function getMovies() {
  fetch(BASE_URL, options)
    .then((response) => response.json())
    .then((response) => console.log(response.results))
    .catch((err) => console.error(err))
}

// export function getPosters() {
//   fetch(BASE_URL, options)
//   .then((response) => response.json())
//   .then((response) => console.log(response.results))
//   .catch((err) => console.error(err))
// }
