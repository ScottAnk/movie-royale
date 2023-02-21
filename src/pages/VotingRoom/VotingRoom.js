import './VotingRoom.css'
import RecommendedMovie from '../../components/RecommendedMovie/RecommendedMovie'
import { useNavigate } from 'react-router-dom'

export default function VotingRoom({ room, setRoom }) {
  const navigate = useNavigate()

  // return to room page on click
  function roomPage() {
    navigate('/room')
  }

  return (
    <div className="VotingRoomPageContainer">
      <div>
        <button className="ReturnButton" onClick={roomPage}>
          Return to Movies List
        </button>
        {/* if no movies, display the first header, else display the second */}
        {room.recommendedMovies.length === 0 ? (
          <h2> There are no movies yet </h2>
        ) : (
          <h2>It's time to vote on the movie you wanna see!</h2>
        )}
      </div>
      {/* if no movies, don't display anything, else, go ahead and render everything */}
      {room.recommendedMovies.length === 0 ? (
        ''
      ) : (
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
      )}
    </div>
  )
}
