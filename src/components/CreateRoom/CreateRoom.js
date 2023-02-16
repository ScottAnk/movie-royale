export default function CreateRoom({ roomCode, setRoomCode }) {
  function createRoom() {
    console.log('Room Created')
  }
  return (
    <div className="EnterRoom">
      <h2>Let's Get Watchin'</h2>
      <button onClick={createRoom}>Create Room</button>
    </div>
  )
}
