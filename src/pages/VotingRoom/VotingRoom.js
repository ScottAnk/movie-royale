import './VotingRoom.css'
import RecommendedMovie from '../../components/RecommendedMovie/RecommendedMovie'


export default function VotingRoom({ room, setRoom }) {
  return (
    <div className="VotingRoomPageContainer">
      <div>
        <h2>It's time to vote on the movie you wanna see!</h2>
      </div>
      <ul className="RecommendedMovieContainer">
        <div className="RecommendedMoviesGrid">
        {room.recommendedMovies.map((movie, index) => (
          <RecommendedMovie room={room} setRoom={setRoom} movie={movie} key={index} />
        ))}
        </div>
      </ul>
    </div>
  )
}
