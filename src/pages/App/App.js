import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar'
import EnterRoom from '../../components/EnterRoom/EnterRoom'
import CreateRoom from '../CreateRoom/CreateRoom'
import RoomPage from '../RoomPage/RoomPage'
import VotingRoom from '../VotingRoom/VotingRoom'

export default function App() {
  const [user, setUser] = useState(getUser())
  const [roomCode, setRoomCode] = useState('')
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            {/* once a room is created, we want to direct to /room */}
            <Route path="/room" element={<RoomPage user={user} />} />
            <Route path="/room/create" element={<CreateRoom />} />
            <Route path="/vote" element={<VotingRoom />} />
            {/* redirect to /room/create if path in address bar hasn't matched a <Route> above */}
            <Route
              path="/*"
              element={
                roomCode === '' ? (
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
          <EnterRoom roomCode={roomCode} setRoomCode={setRoomCode} />
        </>
      )}
    </main>
  )
}
