import { useState } from 'react'
import * as roomsServices from '../../utilities/rooms-services'

export default function RecommendedMovie({ movie, room, setRoom, winner, getWinningMovie }) {
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
    // console.log(room)
    // console.log(event.target.name)
    console.log(body)
    console.log(updatedRoom)
    getWinningMovie()

    if (event.target.name === "yes") {
      setWiggle(!wiggle)
    }
    else if (event.target.name === "no") {
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
        <img src={`${movie.image}`} className="MoviePoster"/>
      </li>
      <div>
        {/* <button value={`${movie.usersVotingYes.length} Upvotes`}></button> */}
        <div className="VotingFooter">
          <h3><u>Number of Votes</u>:</h3>
          <div className="VotingScore">
            <h3 style={{
              color: winner.title === movie.title ? "gold" : "green"
              }}><span className={wiggle ? "WiggleNumber" : ""}>{`+ ${movie.usersVotingYes.length}`}</span> Upvotes</h3>
            <h3 style={{
              color: "darkred"
            }}><span className={flop ? "FlopNumber" : ""}>{`- ${movie.usersVotingNo.length}`}</span> Downvotes</h3>
          </div>
          <div>
          <button name="yes" onClick={handleVote} className="VotingButton">
            Upvote
          </button>
          <button name="no" onClick={handleVote} className="VotingButton">
            Downvote
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}
