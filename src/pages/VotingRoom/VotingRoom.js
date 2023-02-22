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


  useEffect(
    function () {
      // make a copy of recommendedMovies sorted by number of votes. Ties will be determined by the original order of recommended movies
      const moviesByScore = [...room.recommendedMovies].sort(
        (a, b) => b.usersVotingYes.length - a.usersVotingYes.length
      )
      // winner is the first movie after sorting
      setWinner(moviesByScore[0])
    },
    [room]
  )

  return (
    <div className="RoomPageContainer">
      <div className="RoomCardContainer">
        <div className="HeaderContainer">
          <div className="HeaderContainer"
          style={{marginTop: room.recommendedMovies.length === 0 ? "15vmin" : "0vmin"}}>
            <h2 className="PageTitle">It's Votin' Time!</h2>
            {/* if no movies, display the first header, else display the second */}
            {room.recommendedMovies.length === 0 ? (
              <div>
                <h3 className="CardContainer" style={{paddingTop: "2vmin"}}>
                  There are no recommended movies here yet.
                </h3>
              </div>
            ) : (
              ''

            )}
          </div>
          {/* if no movies, don't display anything, else, go ahead and render everything */}
          {room.recommendedMovies.length === 0 ? (
            ''
          ) : (
            <ul className="RecdMoviesGrid">

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
        <button className="RoomButton" onClick={roomPage}>
              Return to Movies List
            </button>
      </div>
    </div>
  )
}
