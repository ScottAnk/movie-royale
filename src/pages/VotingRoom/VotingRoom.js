import { useState, useEffect } from 'react'
import './VotingRoom.css'
import { useNavigate } from 'react-router-dom'
import RecommendedMovie from '../../components/RecommendedMovie/RecommendedMovie'

export default function VotingRoom({ room, setRoom }) {
  const [winner, setWinner] = useState({ imdbid: '' })

  const navigate = useNavigate()

  // return to room page on click
  function roomPage() {
    navigate('/room')
  }

  useEffect(getWinningMovie, [room])
  function getWinningMovie() {
    // make a copy of recommendedMovies sorted by number of votes. Ties will be determined by the original order of recommended movies
    const moviesByScore = [...room.recommendedMovies].sort(
      (a, b) => b.usersVotingYes.length - a.usersVotingYes.length
    )
    console.log(moviesByScore.map((mov) => mov.title))
    setWinner(moviesByScore[0])

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
