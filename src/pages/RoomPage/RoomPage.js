import { useNavigate } from 'react-router-dom'
import MovieCard from '../../components/MovieCard/MovieCard'
import * as roomsServices from '../../utilities/rooms-services'
import './RoomPage.css'

export default function RoomPage({ room, movies, setRoom }) {
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
            <h3 style={{marginTop: "2vmin", marginBottom: "-2vmin"}}><i>Room Code:</i></h3>
            <h3
              style={{
                color: '#615954',
                backgroundColor: '#e6efd7',
                padding: '1.5vmin',
                borderStyle: 'solid',
                borderRadius: '1vmin',
              }}
            >
              {room.roomCode}
            </h3>
            <h5>
              <i>
                (Anyone with this room code will be able to join your session)
              </i>
            </h5>
            <div className="VotingRoomButton">
              <button className="RoomButton" onClick={enterVoting}>Enter Voting Room</button>

            </div>
          </div>
          <ul className="MovieGridContainer">
          <h4 className="SelectMovie"><i>Select Movies Below:</i></h4>
          <h5 style={{marginTop: "-2vmin"}}><i>(scroll down to see full list of movies)</i></h5>
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
      </div>

    </div>
  )
}
