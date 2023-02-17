import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
// import * as moviesAPI from '../../utilities/movies-api'
import './RoomPage.css'

export default function RoomPage({ user, room }) {
  const [movies, setMovies] = useState([])
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
      <div className="RoomContainer">
        <div className="CardContainer">
          <h2 style={{ textTransform: 'capitalize' }}>
            {' '}
            {user.name}'s Room Page
          </h2>
          <h2>Room code is now: {room.roomCode}</h2>
          <ul className="MovieCardContainer">
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            {/* <MovieCard movies={movies} /> */}
          </ul>
          {/* movies.map */}
          <ul>
            <MovieCard movies={movies} />
          </ul>
          <button onClick={enterVoting}>Enter Voting Room</button>
          <button onClick={createRoomConsole}>console room code</button>
        </div>
      </div>
    </div>
  )
}
