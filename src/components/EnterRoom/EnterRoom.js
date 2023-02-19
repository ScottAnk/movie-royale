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
    <div className="RoomPageContainer">
      <div className="RoomCardContainer">
        <h2 className="AuthHeader">
          <u>Let's Get Watchin'</u>
        </h2>
        <button
          onClick={() => setShowRoomCodeForm(!showRoomCodeForm)}
          style={{
            marginTop: '-1vmin',
            display: showRoomCodeForm ? 'none' : 'inline-block',
          }}
        >
          Already Have a Room Code?
        </button>

        {showRoomCodeForm ? (
          <div className="RoomCodeFormContainer">
            <form
              autoComplete="off"
              onSubmit={handleSubmit}
              className="EnterRoomForm"
            >
              <label>Enter Room Code: </label>
              <br />
              <input
                className="RoomCodeInput"
                type="text"
                value={room}
                onChange={handleChange}
                placeholder="Enter 6-Digit Code Here"
                name="room"
                required
              />
              <button type="submit" className="RoomCodeSubmit">
                Submit Room Code
              </button>
            </form>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}
