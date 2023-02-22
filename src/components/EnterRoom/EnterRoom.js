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
        <h2 className="AuthHeader" style={{ marginBottom: '-2vmin' }}>
          <u>Let's Get Watchin'</u>
        </h2>
        <h3 style={{ marginBottom: '-1vmin' }}>
          <i>Have a room code?</i>
        </h3>
        <h5 style={{ marginBottom: '5vmin', color: '#839159' }}>
          <i>
            {showRoomCodeForm
              ? 'You can join your party using this form here:'
              : 'Click the button below to input your code:'}
          </i>
        </h5>
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
                className="RoomCodeForm"
              >
                <div>
                  <div className="RoomCodeText">
                    <label style={{ marginTop: '-0.5vmin' }}>
                      Enter Room Code:{' '}
                    </label>
                    <input
                      className="RoomCodeInput"
                      type="text"
                      maxLength="6"
                      value={roomCode}
                      onChange={handleChange}
                      placeholder="Enter 6-Digit Code Here"
                      name="room"
                      required
                    />
                  </div>
                  <button type="submit" className="RoomCodeSubmit">
                    Join Existing Room
                  </button>
                </div>
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
