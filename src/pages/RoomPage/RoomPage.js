import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
// import * as moviesAPI from '../../utilities/movies-api'
import './RoomPage.css'

export default function RoomPage({ user, room, movies }) {
  const navigate = useNavigate()
  function enterVoting() {
    // navigate to voting
    navigate('/vote')
  }

  function createRoomConsole() {
    console.log(room)
  }

  return (
    <div className="RoomPage">
      <div className="RoomCardContainer">
        <div className="RoomTextContainer">
          <h2 style={{ textTransform: 'capitalize' }}>
            {' '}
            {user.name}'s Room Page
          </h2>
          <div className="SelectMovieContainer">
            <h2>Room code is now: {room.roomCode} </h2>
          </div>
          <ul className="MovieCardContainer">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={index} />
            ))}
          </ul>
          <button onClick={enterVoting}>Enter Voting Room</button>
          <button onClick={createRoomConsole}>console room code</button>
        </div>
      </div>
    </div>
  )
}
