import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './EnterRoom.css'

import * as roomsAPI from '../../utilities/rooms-api'

export default function EnterRoom({ user, setUser, room, setRoom }) {
  const [showRoomCodeForm, setShowRoomCodeForm] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    // set user to true
    setUser(!user)
    handleSetRoomFinal()
    // navigate to room page
    navigate('/room')
  }

  function handleSetRoomFinal() {
    async function handleSetRoom(room) {
      const newRoom = await roomsAPI.getRoomById(room)
      console.log(newRoom)
      setRoom(newRoom)
    }
    handleSetRoom(room)
  }

  function handleChange(event) {
    const newRoomCode = event.target.value
    setRoom(newRoomCode)
    console.log(room)
  }

  return (
    <div className="EnterRoom">
      <div className="CardContainer">
        <h2>Let's Get Watchin'</h2>
        <button
          onClick={() => setShowRoomCodeForm(!showRoomCodeForm)}
          style={{ display: showRoomCodeForm ? 'none' : 'inline-block' }}
        >
          Already Have a Room Code?
        </button>
        <div className="RoomCodeForm">
          {showRoomCodeForm ? (
            <form autoComplete="off" onSubmit={handleSubmit}>
              <label style={{ textAlign: 'center' }}>Enter Room Code: </label>
              <input
                style={{
                  marginTop: '5px',
                  marginBottom: '5px',
                  marginRight: '8px',
                }}
                type="text"
                value={room}
                onChange={handleChange}
                placeholder="XXXXXX"
                name="room"
                required
              />
              <button type="submit">Submit Room Code</button>
            </form>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  )
}
