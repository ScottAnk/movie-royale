import { useState } from 'react'
import * as roomsServices from '../../utilities/rooms-services'

export default function RecommendedMovie({ movie, room, setRoom, winner }) {
  const [wiggle, setWiggle] = useState(false)
  const [flop, setFlop] = useState(false)

  async function handleVote(event) {
    const vote = event.target.name
    const body = {
      imdbid: movie.imdbid,
      vote: vote,
    }
    const updatedRoom = await roomsServices.addNewVote(room.roomCode, body)
    setRoom(updatedRoom)

    if (event.target.name === 'yes') {
      setWiggle(!wiggle)
    } else if (event.target.name === 'no') {
      setFlop(!flop)
    }
  }

  console.log(winner)

  return (
    <div className="MovieCard">
      <h4>
        <i>"{movie.title}"</i>
      </h4>
      <li>
        <img src={`${movie.image}`} className="MoviePoster" />
      </li>
      <div>
        <div className="VotingFooter">
          <h3>
            <u>Number of Votes</u>:
          </h3>
          <div className="VotingScore">
            <h4
              style={{
                marginLeft: '1vmin',
                marginRight: '2vmin',
                color: winner.imdbid === movie.imdbid ? 'gold' : 'green',
              }}
            >
              <span
                className={wiggle ? 'WiggleNumber' : ''}
              >{`+ ${movie.usersVotingYes.length}`}</span>{' '}
              Upvotes
            </h4>
            <h4
              style={{
                marginRight: '2vmin',
                color: 'darkred',
              }}
            >
              <span
                className={flop ? 'FlopNumber' : ''}
              >{`- ${movie.usersVotingNo.length}`}</span>{' '}
              Downvotes
            </h4>
          </div>
          <div className="VotingButtons">
            <button
              name="yes"
              onClick={handleVote}
              style={{ marginRight: '1.5vmin' }}
            >
              Upvote
            </button>
            <button name="no" onClick={handleVote}>
              Downvote
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
