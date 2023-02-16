// import sendRequest from './send-request'

// api requests for movies
const BASE_URL = 'https://moviesdatabase.p.rapidapi.com/titles?limit=10&page=10'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e1cfa875a1msh2b63ee573dce486p158f9bjsnf99cf80dd680',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
  },
}

export function getMovies() {
  fetch(BASE_URL, options)
    .then((response) => response.json())
    .then((response) => console.log(response.results))
    .catch((err) => console.error(err))
}
