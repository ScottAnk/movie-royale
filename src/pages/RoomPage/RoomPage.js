import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as moviesAPI from '../../utilities/movies-api'

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
    <div className="RoomPage">
      <h2>Room Page</h2>
      <ul>
        <li>Movie</li>
      </ul>
      <button onClick={enterVoting}>Vote</button>
    </div>
  )
}
