const axios = require('axios')

function getMovies(req, res, next) {
  const options = {
    method: 'GET',
    url: 'https://imdb-top-100-movies.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
    },
  }

  axios
    .request(options)
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => {
      next(error)
    })
}

module.exports = {
  getMovies,
}
