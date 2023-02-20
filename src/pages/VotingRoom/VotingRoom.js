import './VotingRoom.css'
import RecommendedMovie from '../../components/RecommendedMovie/RecommendedMovie'


export default function VotingRoom({ movies, room, setRoom }) {
  return (
    <div className="VotingRoomPageContainer">
      <ul className="MoviesListContainer">
        {room.recommendedMovies.map((movie, index) => (
          <RecommendedMovie room={room} setRoom={setRoom} movie={movie} key={index} />
        ))}
      </ul>
    </div>
  )
}
