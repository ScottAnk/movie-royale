import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar'
import EnterRoom from '../../components/EnterRoom/EnterRoom'
import CreateRoom from '../../components/CreateRoom/CreateRoom'
import RoomPage from '../RoomPage/RoomPage'

export default function App() {
  const [user, setUser] = useState(getUser())
  const [roomCode, setRoomCode] = useState('')
  return (
    <main className="App">
      {user ? (
        <>
          <Routes>
            <Route path="/room" element={<RoomPage />} />
          </Routes>
          <NavBar user={user} />
          <CreateRoom />
        </>
      ) : (
        <>
          <EnterRoom roomCode={roomCode} setRoomCode={setRoomCode} />
          <AuthPage setUser={setUser} />
        </>
      )}
    </main>
  )
}
