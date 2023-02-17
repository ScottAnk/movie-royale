import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
import * as moviesAPI from '../../utilities/movies-api'
import userEvent from '@testing-library/user-event'
import './RoomPage.css'

export default function RoomPage({ user }) {
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
    <div className="RoomPage">
      <div className="RoomCardContainer">
        <div className="RoomTextContainer">
          <h2 style={{ textTransform: 'capitalize' }}>
            {user.name}'s Room Page
          </h2>
          <div className="SelectMovieContainer">
            <ul>
              <li className="Movie">Movie Test</li>
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
          </div>
          <button onClick={enterVoting}>Vote</button>
        </div>
      </div>
    </div>
  )
}
