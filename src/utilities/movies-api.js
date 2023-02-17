import sendRequest from './send-request'

console.log(process.env.REACT_APP_API_KEY)

// RAPID API

// api requests for movies
const BASE_URL = 'https://imdb-top-100-movies.p.rapidapi.com/'

const options = {
	method: 'GET',
	headers: {
    'X-RapidAPI-Key': '78ea03e8fbmsh95da0ad8582dd46p1e3026jsnbc7a092bcde3',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

export function getMovies() {
  fetch(BASE_URL, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err))
}

// export function getPosters() {
//   fetch(BASE_URL, options)
//   .then((response) => response.json())
//   .then((response) => console.log(response.results))
//   .catch((err) => console.error(err))
// }
