import { useNavigate } from 'react-router-dom'
import './CreateRoom.css'
import * as roomsServices from '../../utilities/rooms-services'

export default function CreateRoom({ room, setRoom }) {
  const navigate = useNavigate()

  async function createRoom() {
    // grab our room
    const newRoom = await roomsServices.createRoom()
    // set the room
    setRoom(newRoom)
    // navigate to room view
    navigate('/room')
  }

  return (
    <div className="CreateRoomContainer">
      <div className="CreateRoomCardContainer">
        <h2 className="PageTitle">
          <u>Let's Get Watchin'</u>
        </h2>
        <button onClick={createRoom}>Create Room</button>
      </div>
    </div>
  )
}
