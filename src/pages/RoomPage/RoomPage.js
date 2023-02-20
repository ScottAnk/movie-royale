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
    <div className="RoomPageContainer">
      <div className="RoomCardContainer">
        <h1 style={{ textTransform: 'capitalize' }}>
          <u>{user.name}'s Room Page</u>
        </h1>
        <div className="CodeCardContainer">
          <h3>This is your Room Code:</h3>
          <h2 style={{
            backgroundColor: "rgb(178, 194, 211)",
            marginLeft: "25vmin",
            marginRight: "25vmin",
            padding: "1vmin",
            borderStyle: "solid",
            borderRadius: "1vmin"
        }}>{room.roomCode}</h2>
          <h4><i>(Anyone with this room code will be able to join your session)</i></h4>
        </div>
        <div>
          <h1 style={{marginTop: "10vmin", marginBottom: "-5vmin"}}>Select Movies To Vote On:</h1>
        </div>
        <ul className="MovieListContainer">
          {movies.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </ul>
        <button onClick={enterVoting}>Enter Voting Room</button>
        <button onClick={createRoomConsole}>console room code</button>
      </div>
    </div>
  )
}
