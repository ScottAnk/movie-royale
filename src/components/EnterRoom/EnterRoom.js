import { useState } from 'react'
import './EnterRoom.css'

export default function EnterRoom({ roomCode, setRoomCode }) {
  const [showRoomCodeForm, setShowRoomCodeForm] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    console.log('Moving on to list of movies page (room) ')
    console.log(roomCode)
    // possible <Navigate /> once roomcode is entered
    // https://reactrouter.com/en/main/components/navigate
  }

  function handleChange(event) {
    const newRoomCode = event.target.value
    setRoomCode(newRoomCode)
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
                value={roomCode}
                onChange={handleChange}
                placeholder="XXXXXX"
                name="roomCode"
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
