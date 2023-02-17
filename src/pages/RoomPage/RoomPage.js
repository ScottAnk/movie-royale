import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
import * as moviesAPI from '../../utilities/movies-api'
import './RoomPage.css'

export default function RoomPage() {
  const [movies, setMovies] = useState([])
  const navigate = useNavigate()
  function enterVoting() {
    console.log("Let's Vote")
    navigate('/vote')
  }

  useEffect(function () {
    async function getMovies() {
      await moviesAPI.getMovies()
    }
    getMovies()
  }, [])

  return (
    <div className="RoomPageContainer">
      <div className="RoomContainer">
        <div className="CardContainer">
          <h2>Room Page</h2>
          <ul>
            <MovieCard movies={movies} />
          </ul>
          <button onClick={enterVoting}>Vote</button>
        </div>
      </div>
    </div>
  )
}
