import { useNavigate } from 'react-router-dom'
import './CreateRoom.css'
import * as roomsServices from '../../utilities/rooms-services'

export default function CreateRoom({ room, setRoom }) {
  const navigate = useNavigate()

  function createRoom() {
    // navigate to room
    navigate('/room')
    async function getRoom() {
      // grab our room
      const newRoom = await roomsServices.createRoom()
      // set the room
      setRoom(newRoom)
      console.log(newRoom)
    }
    getRoom()
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
