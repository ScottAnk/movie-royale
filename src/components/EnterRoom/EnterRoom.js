import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './EnterRoom.css'

import * as roomsAPI from '../../utilities/rooms-api'
import { tempUser } from '../../utilities/users-service'

export default function EnterRoom({ user, setUser, room, setRoom }) {
  const [showRoomCodeForm, setShowRoomCodeForm] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()
    // grab the guest user
    const newUser = await tempUser()
    console.log(newUser)
    setUser(newUser)
    handleSetRoomFinal()
    // navigate to room page
    navigate('/room')
  }

  function handleSetRoomFinal() {
    async function handleSetRoom(room) {
      const newRoom = await roomsAPI.getRoomById(room)
      setRoom(newRoom)
    }
    handleSetRoom(room)
  }

  function handleChange(event) {
    // default the input to upper case
    const newRoomCode = event.target.value.toUpperCase()
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
