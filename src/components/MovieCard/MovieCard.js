import { selectMovie } from '../../utilities/rooms-api'

export default function MovieCard({ movie, room, setRoom, isRecommended }) {
  async function handleRecommend(event) {
    const updatedRoom = await selectMovie(room.roomCode, movie)
    setRoom(updatedRoom)
    console.log(room)
  }

  return (
    <div className='MovieCard'>
      <div className='MovieInfo'>
        <h4>
          <i>'{movie.title}'</i>
        </h4>
      </div>
      <li
        className='MoviePoster'
        style={{
          backgroundImage: isRecommended
            ? `radial-gradient(red, yellow)`
            : `url(${movie.image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          height: '100%',
          width: '100%',
          minHeight: '300px',
          minWidth: '200px',
          maxHeight: '300px',
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
