import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Remove token using the user service
    userService.logOut()
    // Update user state in App
    setUser(null)
  }

  return (
    <div className="NavBarContainer">
      <h2>Movie Royale</h2>
      <div className="NavText">
        <span>Welcome, <b>{user.name}</b></span>
        <nav>
          {/* <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp; | &nbsp; */}
          &nbsp; | &nbsp;
          <Link to="" onClick={handleLogOut}>
            Log Out
          </Link>
        </nav>
      </div>
    </div>
  )
}
