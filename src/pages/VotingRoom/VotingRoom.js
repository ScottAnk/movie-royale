import { useState } from 'react'
import './VotingRoom.css'
import RecommendedMovie from '../../components/RecommendedMovie/RecommendedMovie'

export default function VotingRoom({ room, setRoom }) {
  const [winner, SetWinner] = useState({}) 

  function getWinningMovie() {
    const highestNumber = 0

    room.recommendedMovies.forEach((movie) => {
      if (movie.usersVotingYes.length > highestNumber) {
      SetWinner(movie)
    }})
    console.log(winner)
  }

  return (
    <div className="RoomPageContainer">
      <div className="RoomCardContainer">
      <div className="SectionContainer">
        <h2 className="PageTitle">It's Votin' Time!</h2>
        </div>
      <ul className="RecdMovieGrid">
        <div className="RecdMoviesContainer">
          {room.recommendedMovies.map((movie, index) => (
            <RecommendedMovie
              room={room}
              setRoom={setRoom}
              movie={movie}
              key={index}
              winner={winner}
              getWinningMovie={getWinningMovie}
            />
          ))}
        </div>
      </ul>
      </div>
    </div>
  )
}
