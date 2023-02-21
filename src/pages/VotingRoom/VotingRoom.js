import './VotingRoom.css'
import RecommendedMovie from '../../components/RecommendedMovie/RecommendedMovie'
import { useNavigate } from 'react-router-dom'

export default function VotingRoom({ room, setRoom }) {
  const navigate = useNavigate()

  // return to room page on click
  function roomPage() {
    console.log(room)
    navigate('/room')
  }

  return (
    <div className="VotingRoomPageContainer">
      <div>
        <button className="ReturnButton" onClick={roomPage}>
          Return to Movies List
        </button>
        <h2>It's time to vote on the movie you wanna see!</h2>
      </div>
      <ul className="RecommendedMovieContainer">
        <div className="RecommendedMoviesGrid">
          {room.recommendedMovies.map((movie, index) => (
            <RecommendedMovie
              room={room}
              setRoom={setRoom}
              movie={movie}
              key={index}
            />
          ))}
        </div>
      </ul>
    </div>
  )
}
