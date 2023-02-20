import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
// import * as moviesAPI from '../../utilities/movies-api'
import './RoomPage.css'
import { set } from 'mongoose'

export default function RoomPage({
  user,
  room,
  movies,
  selectedMovies,
  setSelectedMovies,
}) {
  const navigate = useNavigate()
  function enterVoting() {
    // navigate to voting
    navigate('/vote')
  }

  // for testing
  function createRoomConsole() {
    console.log(room.roomName)
  }

  // for testing
  function checkUser() {
    console.log(user)
  }

  return (
    <div className="RoomPage">
      <div className="RoomCardContainer">
        <div className="RoomTextContainer">
          <h2 style={{ textTransform: 'capitalize' }}> {room.roomName} Page</h2>
          <div className="SelectMovieContainer">
            <h2>Room code is now: {room.roomCode} </h2>
          </div>
          <ul className="MovieCardContainer">
            {movies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={index}
                selectedMovies={selectedMovies}
                setSelectedMovies={setSelectedMovies}
              />
            ))}
          </ul>
          <button onClick={enterVoting}>Enter Voting Room</button>
          <button onClick={createRoomConsole}>console room </button>
          <button onClick={checkUser}>console user</button>
        </div>
      </div>
    </div>
  )
}
