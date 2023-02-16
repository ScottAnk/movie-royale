import React, { useState } from 'react'
import { Routes } from 'react-router-dom'
import './App.css'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar'
import EnterRoom from '../../components/EnterRoom/EnterRoom'

export default function App() {
  const [user, setUser] = useState(getUser())
  const [roomCode, setRoomCode] = useState('')
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} />
          <Routes></Routes>
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
