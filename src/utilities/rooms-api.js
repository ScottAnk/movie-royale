// api requests for rooms
import sendRequest from './send-request'

const BASE_URL = '/api/rooms'

export function getRoom() {
  return sendRequest(BASE_URL, 'POST')
}
