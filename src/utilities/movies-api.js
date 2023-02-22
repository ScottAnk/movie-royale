import sendRequest from './send-request'

const BASE_URL = 'https://movie-royale-client.onrender.com/api/movies'

export async function getMovies() {
  return sendRequest(BASE_URL)
}
