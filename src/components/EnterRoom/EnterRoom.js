export default function EnterRoom({ roomCode, setRoomCode }) {
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
      <h2>Let's Get Watchin'</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Room Code:{' '}
          <input
            type="text"
            value={roomCode}
            onChange={handleChange}
            placeholder="XXXXXX"
            name="roomCode"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
