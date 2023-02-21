import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import * as roomsService from '../../utilities/rooms-services'
import './NavBar.css'

export default function NavBar({ user, setUser, setRoom }) {
  function handleLogOut() {
    // Remove token and room
    userService.logOut()
    roomsService.leaveRoom()

    // Update user and room states in App
    setUser(null)
    setRoom(null)
  }

  return (
    <div className="NavBarContainer">
      <h1 className="NavTitle">Movie Royale</h1>
      <div className="NavText">
        <span>
          Welcome, <b style={{ textTransform: 'capitalize' }}>{user.name}</b>
        </span>
        <nav>
          &nbsp; | &nbsp;
          <Link to="" onClick={handleLogOut}>
            Log Out
          </Link>
        </nav>
      </div>
    </div>
  )
}
