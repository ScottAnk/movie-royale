// api requests for rooms
import sendRequest from './send-request'

const BASE_URL_PREFIX =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_DEPLOYMENT_BACKEND
    : process.env.REACT_APP_DEVELOPMENT_BACKEND
const BASE_URL = BASE_URL_PREFIX + '/api/rooms'

export function getRoom() {
  return sendRequest(BASE_URL, 'POST')
}

export function getRoomById(roomCode) {
  return sendRequest(BASE_URL + `/${roomCode}`)
}

export async function selectMovie(roomCode, movie) {
  return sendRequest(BASE_URL + `/${roomCode}` + '/recommend', 'POST', movie)
}

export async function vote(roomCode, body) {
  return sendRequest(BASE_URL + `/${roomCode}` + '/vote', 'POST', body)
}
