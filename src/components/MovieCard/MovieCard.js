import { recommendMovie } from '../../utilities/rooms-services'

export default function MovieCard({ movie, room, setRoom, isRecommended }) {
  async function handleRecommend(event) {
    const updatedRoom = await recommendMovie(room.roomCode, movie)
    setRoom(updatedRoom)
    console.log(room)
  }

  return (
    <div className="MovieCard">
      <h4>
        <i>"{movie.title}"</i>
      </h4>
      <li
        className="MoviePoster"
        style={{
          backgroundImage: isRecommended
            ? `radial-gradient(red, yellow)`
            : `url(${movie.image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          height: '100%',
          width: '100%',
          minHeight: '200px',
          minWidth: '100px',
          maxHeight: '200px',
          maxWidth: 'auto',
        }}
      ></li>
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
