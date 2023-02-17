import { useNavigate } from 'react-router-dom'
import './CreateRoom.css'

export default function CreateRoom({ roomCode, setRoomCode }) {
  const navigate = useNavigate()
  function createRoom() {
    console.log('Room Created')
    navigate('/room')
    //
  }
  return (
    <div className="CreateRoomContainer">
      <div className="CardContainer">
      <h2>Let's Get Watchin'</h2>
      <button onClick={createRoom}>Create Room</button>
      </div>
    </div>
  )
}
