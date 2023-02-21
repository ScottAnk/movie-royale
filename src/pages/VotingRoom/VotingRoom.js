import { useState } from 'react'
import './VotingRoom.css'
import { useNavigate } from 'react-router-dom'
import RecommendedMovie from '../../components/RecommendedMovie/RecommendedMovie'

export default function VotingRoom({ room, setRoom }) {
  const [winner, SetWinner] = useState({})

  const navigate = useNavigate()

  // return to room page on click
  function roomPage() {
    navigate('/room')
  }

  function getWinningMovie() {
    const highestNumber = 0

    room.recommendedMovies.forEach((movie) => {
      if (movie.usersVotingYes.length > highestNumber) {
        SetWinner(movie)
      }
    })
    console.log(winner)
  }

  return (
    <div className="RoomPageContainer">
      <div className="RoomCardContainer">
        <div className="SectionContainer">
          <div>
            <button className="ReturnButton" onClick={roomPage}>
              Return to Movies List
            </button>
            {/* if no movies, display the first header, else display the second */}
            {room.recommendedMovies.length === 0 ? (
              <h2> There are no movies yet </h2>
            ) : (
              <h2 className="PageTitle">It's Votin' Time!</h2>
            )}
          </div>
          {/* if no movies, don't display anything, else, go ahead and render everything */}
          {room.recommendedMovies.length === 0 ? (
            ''
          ) : (
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
          )}
        </div>
      </div>
    </div>
  )
}
