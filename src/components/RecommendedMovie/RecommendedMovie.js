import * as roomsServices from '../../utilities/rooms-services'

export default function RecommendedMovie({ movie, room, setRoom }) {
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
  }

  return (
    <div className="MovieCard">
      <div className="MovieInfo">
        <h4>
          <i>"{movie.title}"</i>
        </h4>
      </div>
      <li
        className="MoviePoster"
        style={{
          backgroundImage: `url(${movie.image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          height: '100%',
          width: '100%',
          minHeight: '60vmin',
          minWidth: '20vmin',
          maxHeight: '60vmin',
          maxWidth: '60vmin',
        }}
      ></li>
      <div>
        {/* <button value={`${movie.usersVotingYes.length} Upvotes`}></button> */}
        <div className="VotingFooter">
          <h2><u>Number of Votes</u>:</h2>
          <div className="VotingScore">
            <h3 style={{
              marginRight: "1.5vmin",
              color: "green"

              }}>{`+ ${movie.usersVotingYes.length} Upvotes`}</h3>
            <h3 style={{
              color: "darkred"
            }}>{`- ${movie.usersVotingNo.length} Downvotes`}</h3>
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
