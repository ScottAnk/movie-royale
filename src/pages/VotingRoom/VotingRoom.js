import './VotingRoom.css'
import RecommendedMovie from '../../components/RecommendedMovie/RecommendedMovie'

export default function VotingRoom({ room }) {
  return (
    <div className="VotingRoom">
      <div className="CardContainer">
        {room.recommendedMovies.map((movie, index) => (
          <RecommendedMovie movie={movie} key={index} />
        ))}
      </div>
    </div>
  )
}
