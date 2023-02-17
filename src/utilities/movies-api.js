import sendRequest from './send-request'

const BASE_URL = '/api/movies'

export function getMovies() {
  sendRequest(BASE_URL)
}
