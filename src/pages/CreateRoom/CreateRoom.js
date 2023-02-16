import { useNavigate } from 'react-router-dom'

export default function CreateRoom({ roomCode, setRoomCode }) {
  const navigate = useNavigate()
  function createRoom() {
    console.log('Room Created')
    navigate('/room')
  }
  return (
    <div className="EnterRoom">
      <h2>Let's Get Watchin'</h2>
      <button onClick={createRoom}>Create Room</button>
    </div>
  )
}
