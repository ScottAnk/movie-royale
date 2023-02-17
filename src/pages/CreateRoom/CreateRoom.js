import { useNavigate } from 'react-router-dom'
import './CreateRoom.css'
import * as roomsAPI from '../../utilities/rooms-api'

export default function CreateRoom({ room, setRoom }) {
  const navigate = useNavigate()
  function createRoom() {
    // navigate to room
    navigate('/room')
    async function getRoom() {
      // grab our room
      const newRoom = await roomsAPI.getRoom()
      // set the room

      setRoom(newRoom)
      console.log(newRoom)
    }
    getRoom()
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
