import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './EnterRoom.css'
import * as roomsServices from '../../utilities/rooms-services'
import { tempUser } from '../../utilities/users-service'

export default function EnterRoom({ setUser, setRoom }) {
  const [showRoomCodeForm, setShowRoomCodeForm] = useState(false)
  const [roomCode, setRoomCode] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      // attempt to get the room
      const newRoom = await roomsServices.fetchRoom(roomCode)
      setRoom(newRoom)

      // log in as a guest user
      const newUser = await tempUser()
      setUser(newUser)

      // navigate to room page
      navigate('/room')
    } catch {
      setError("oops, that code didn't work")
    }
  }

  function handleChange(event) {
    // default the input to upper case
    const newRoomCode = event.target.value.toUpperCase()
    setRoomCode(newRoomCode)
  }

  return (
    <div className="EnterRoom">
      <div className="RoomCodeCardContainer">
        <h2 className="AuthHeader">
          <u>Let's Get Watchin'</u>
        </h2>
        <h4 style={{ marginBottom: '-2vmin' }}>
          <i>Have a room code?</i>
        </h4>
        <h4 style={{ marginBottom: '5vmin' }}>
          You can join your party using this form here:
        </h4>
        <button
          onClick={() => setShowRoomCodeForm(!showRoomCodeForm)}
          style={{
            marginTop: '-1vmin',
            display: showRoomCodeForm ? 'none' : 'inline-block',
          }}
        >
          Room Code Entry
        </button>

        {showRoomCodeForm ? (
          <>
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
                  maxlength="6"
                  value={roomCode}
                  onChange={handleChange}
                  placeholder="Enter 6-Digit Code Here"
                  name="room"
                  required
                />
                <button type="submit" className="RoomCodeSubmit">
                  Join Existing Room
                </button>
              </form>
            </div>
            <p className="error-message">{error}</p>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}
