import { useNavigate } from 'react-router-dom'
import MovieCard from '../../components/MovieCard/MovieCard'
import * as roomsServices from '../../utilities/rooms-services'
import './RoomPage.css'

export default function RoomPage({ user, room, movies, setRoom }) {
  const movieNames = room.recommendedMovies.map((movie) => movie.title)
  const navigate = useNavigate()

  async function enterVoting() {
    // re-fetch the room
    const newRoom = await roomsServices.fetchRoom(room.roomCode)
    // re-set the room
    setRoom(newRoom)
    // navigate to voting
    navigate('/vote')
  }

  return (
    <div className="RoomPageContainer">
      <div className="RoomCardContainer">
        <h2 className="PageTitle" style={{ textTransform: 'capitalize' }}>
          <u>{room.roomName} Page</u>
        </h2>
        <div className="SectionContainer">
          <div className="CodeCard">
            <h2>Room Code:</h2>
            <h3
              style={{
                color: '#615954',
                backgroundColor: '#e6efd7',
                margin: '0vmin 65vmin 0vmin 65vmin',
                padding: '1.5vmin',
                borderStyle: 'solid',
                borderRadius: '1vmin',
              }}
            >
              {room.roomCode}{' '}
            </h3>
            <h4>
              <i>
                (Anyone with this room code will be able to join your session)
              </i>
            </h4>
            <div className='VotingRoomButton'>
            <button onClick={enterVoting}>Enter Voting Room</button>
            </div>
          </div>

          <ul className="MovieGridContainer">
            <div className="SelectMovie">
              <h2>Select Your Movie Picks:</h2>
            </div>
            <div className="MoviesContainer">
              {movies.map((movie, index) => (
                <MovieCard
                  movie={movie}
                  key={index}
                  room={room}
                  setRoom={setRoom}
                  isRecommended={movieNames.includes(movie.title)}
                />
              ))}
            </div>
          </ul>
        </div>
      </div
      <button onClick={enterVoting}>Enter Voting Room</button>
    </div>
  )
}
