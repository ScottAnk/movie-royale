import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar'
import EnterRoom from '../../components/EnterRoom/EnterRoom'
import CreateRoom from '../CreateRoom/CreateRoom'
import RoomPage from '../RoomPage/RoomPage'
import VotingRoom from '../VotingRoom/VotingRoom'
import * as moviesAPI from '../../utilities/movies-api'

export default function App() {
  const [user, setUser] = useState(getUser())
  const [room, setRoom] = useState('')
  const [movies, setMovies] = useState([])
  const [selectedMovies, setSelectedMovies] = useState([])

  useEffect(function () {
    async function getMovies() {
      const newMovies = await moviesAPI.getMovies()
      console.log(newMovies)
      setMovies(newMovies)
    }
    getMovies()
  }, [])

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            {/* once a room is created, we want to direct to /room */}
            <Route
              path="/room"
              element={
                <RoomPage
                  user={user}
                  room={room}
                  movies={movies}
                  selectedMovies={selectedMovies}
                  setSelectedMovies={setSelectedMovies}
                />
              }
            />
            <Route
              path="/room/create"
              element={<CreateRoom room={room} setRoom={setRoom} />}
            />
            <Route
              path="/vote"
              element={<VotingRoom selectedMovies={selectedMovies} />}
            />
            {/* redirect to /room/create if path in address bar hasn't matched a <Route> above */}
            <Route
              path="/*"
              element={
                room === '' ? (
                  <Navigate to="/room/create" />
                ) : (
                  <Navigate to="/room" />
                )
              }
            />
          </Routes>
        </>
      ) : (
        <>
          <AuthPage setUser={setUser} />
          <EnterRoom
            user={user}
            setUser={setUser}
            room={room}
            setRoom={setRoom}
          />
        </>
      )}
    </main>
  )
}
