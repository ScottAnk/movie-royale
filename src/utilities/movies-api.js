// import sendRequest from './send-request'

// api requests for movies
const BASE_URL = 'https://moviesdatabase.p.rapidapi.com/titles?limit=10&page=10'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
  },
}

export function getMovies() {
  fetch(BASE_URL, options)
    .then((response) => response.json())
    .then((response) => console.log(response.results))
    .catch((err) => console.error(err))
}
