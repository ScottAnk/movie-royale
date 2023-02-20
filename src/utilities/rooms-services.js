import * as roomsAPI from './rooms-api'

export function findRoom() {
  if (localStorage.getItem('room')) {
    return JSON.parse(localStorage.getItem('room'))
  }
  return null
}

export async function createRoom() {
  const room = await roomsAPI.getRoom()

  localStorage.setItem('room', JSON.stringify(room))
  return room
}

export async function fetchRoom(roomCode) {
  const room = await roomsAPI.getRoomById(roomCode)

  localStorage.setItem('room', JSON.stringify(room))
  return room
}

export async function addNewVote(roomCode, body) {
  const room = await roomsAPI.vote(roomCode, body)

  localStorage.setItem('room', JSON.stringify(room))
  return room
}
