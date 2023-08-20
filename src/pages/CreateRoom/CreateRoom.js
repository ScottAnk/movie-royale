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

  // probably should use something like this to scroll after login https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
  return (
    <div className="CreateRoomContainer">
      <div className="CreateRoomCardContainer">
        <h3 className="PageTitle" style={{ marginBottom: '2vmin' }}>
          <u>Let's Get Watchin'</u>
        </h3>
        <button onClick={createRoom}>Create Room</button>
      </div>
    </div>
  )
}
