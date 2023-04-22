import sendRequest from './send-request'

const BASE_URL_PREFIX =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_DEPLOYMENT_BACKEND
    : process.env.REACT_APP_DEVELOPMENT_BACKEND
const BASE_URL = BASE_URL_PREFIX + '/api/movies'

export async function getMovies() {
  return sendRequest(BASE_URL)
}
