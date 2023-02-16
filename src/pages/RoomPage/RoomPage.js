import { useNavigate } from 'react-router-dom'

export default function RoomPage() {
  const navigate = useNavigate()
  function enterVoting() {
    console.log("Let's Vote")
    navigate('/vote')
  }
  return (
    <div className="RoomPage">
      <h2>Room Page</h2>
      <ul>
        <li>Movie</li>
      </ul>
      <button onClick={enterVoting}>Vote</button>
    </div>
  )
}
