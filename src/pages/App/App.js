import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar'
import EnterRoom from '../../components/EnterRoom/EnterRoom'
import CreateRoom from '../CreateRoom/CreateRoom'
import RoomPage from '../RoomPage/RoomPage'
import VotingRoom from '../VotingRoom/VotingRoom'
import * as moviesAPI from '../../utilities/movies-api'
import { findRoom } from '../../utilities/rooms-services'
import './App.css'

export default function App() {
  const [user, setUser] = useState(getUser())
  const [room, setRoom] = useState(findRoom())
  const [roomCode, setRoomCode] = useState('')
  const [movies, setMovies] = useState([])

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
                  setRoom={setRoom}
                />
              }
            />
            <Route
              path="/room/create"
              element={<CreateRoom room={room} setRoom={setRoom} />}
            />
            <Route path="/vote" element={<VotingRoom movies={movies} room={room} setRoom={setRoom} />} />
            {/* redirect to /room/create if path in address bar hasn't matched a <Route> above */}
            <Route
              path="/*"
              element={
                room === null ? (
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
          <div className="BodyContainer">
            <AuthPage setUser={setUser} />
            <EnterRoom
              user={user}
              setUser={setUser}
              room={room}
              setRoom={setRoom}
              roomCode={roomCode}
              setRoomCode={setRoomCode}
            />
          </div>
        </>
      )}
    </main>
  )
}
