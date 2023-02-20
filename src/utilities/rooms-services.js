import * as roomsAPI from './rooms-api'

/**
 * retrieves room data from local storage
 * @returns {Object|null} - a room object if it was found
 */
export function findRoom() {
  if (localStorage.getItem('room')) {
    return JSON.parse(localStorage.getItem('room'))
  }
  return null
}

/**
 * requests the server to make a new room.
 * stores room result locally.
 * @returns {Object} - a new room
 */
export async function createRoom() {
  const room = await roomsAPI.getRoom()

  localStorage.setItem('room', JSON.stringify(room))
  return room
}

/**
 * requests the server to return a room based on a room code.
 * stores room result locally.
 * @param {String} roomCode - the room code to search on the server
 * @returns {Object} - a new room
 */
export async function fetchRoom(roomCode) {
  const room = await roomsAPI.getRoomById(roomCode)

  localStorage.setItem('room', JSON.stringify(room))
  return room
}

/**
 * instructs the server to vote on a movie.
 * stores room result locally
 * @param {String} roomCode - the code for the room the user is voting in
 * @param {Object} voteOptions - the details of the vote to cast.
 * @param {String} voteOptions.imdbid - the id of the movie to vote on.
 * @param {'yes'|'no'} voteOptions.vote - which way to vote. Must be 'yes' or 'no'.
 * @returns {Object} - a new room
 */
export async function addNewVote(roomCode, voteOptions) {
  const room = await roomsAPI.vote(roomCode, voteOptions)

  localStorage.setItem('room', JSON.stringify(room))
  return room
}

/** clears the room data in local storage */
export function leaveRoom() {
  localStorage.removeItem('room')
}
