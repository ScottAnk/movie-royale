import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './EnterRoom.css'

export default function EnterRoom({ user, setUser, room, setRoom }) {
  const [showRoomCodeForm, setShowRoomCodeForm] = useState(false)
  const navigate = useNavigate()
  function handleSubmit(event) {
    event.preventDefault()
    // set user to true
    setUser(!user)
    // navigate to room page
    navigate('/room')
  }

  function handleChange(event) {
    const newRoom = event.target.value
    // set the room code state
    setRoom(newRoom)
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
        <div>
          {showRoomCodeForm ? (
            <form autoComplete="off" onSubmit={handleSubmit}>
              <label>Enter Room Code: </label>
              <input
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
