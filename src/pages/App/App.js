import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import io from 'socket.io-client'

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

const socket = io()

export default function App() {
  const [user, setUser] = useState(getUser())
  const [room, setRoom] = useState(findRoom())
  const [movies, setMovies] = useState([])

  // set up socket events
  useEffect(function () {
    socket.on('room update', function (room) {
      localStorage.setItem('room', JSON.stringify(room))
      setRoom(room)
    })

    return function () {
      socket.off('room update')
    }
  }, [])

  function handleSetRoom(room) {
    socket.emit('join room', room.roomCode)
    setRoom(room)
  }

  useEffect(function () {
    async function getMovies() {
      const newMovies = await moviesAPI.getMovies()
      setMovies(newMovies)
    }
    getMovies()
  }, [])

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} setRoom={handleSetRoom} />
          <Routes>
            {/* once a room is created, we want to direct to /room */}
            <Route
              path="/room"
              element={
                <RoomPage room={room} movies={movies} setRoom={handleSetRoom} />
              }
            />
            <Route
              path="/room/create"
              element={<CreateRoom room={room} setRoom={handleSetRoom} />}
            />
            <Route
              path="/vote"
              element={<VotingRoom room={room} setRoom={handleSetRoom} />}
            />
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
            <EnterRoom user={user} setUser={setUser} setRoom={handleSetRoom} />
          </div>
        </>
      )}
    </main>
  )
}
