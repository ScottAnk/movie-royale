import * as roomsAPI from './rooms-api'

export function findRoom() {
  if (localStorage.getItem('room')) {
    return JSON.parse(localStorage.getItem('room'))
  }
  return ''
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
