import { selectMovie } from '../../utilities/rooms-api'

export default function MovieCard({ movie, room, setRoom, isRecommended }) {
  async function handleRecommend(event) {
    const updatedRoom = await selectMovie(room.roomCode, movie)
    setRoom(updatedRoom)
    console.log(room)
  }

  return (
    <div className="MovieCard">
        <h4>
          <i>"{movie.title}"</i>
        </h4>
      <li>
        <img src={`${movie.image}`} className={isRecommended ? 'RotatedMoviePoster' : 'MoviePoster'} />
      </li>
      <button
        disabled={isRecommended}
        onClick={handleRecommend}
        style={{ margin: '3vmin' }}
      >
        {isRecommended ? 'Recommended' : 'Recommend'}
      </button>
    </div>
  )
}
