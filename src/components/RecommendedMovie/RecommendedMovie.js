import * as roomsServices from '../../utilities/rooms-services'

export default function RecommendedMovie({ movie, room, setRoom }) {
  
  async function handleVote(event) {
    const vote = event.target.name
    const body = {
      imdbid: movie.imdbid,
      vote: vote
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
          minHeight: '300px',
          minWidth: '200px',
          maxHeight: '300px',
          maxWidth: 'auto',
        }}
      ></li>
      <div>
        {/* <button value={`${movie.usersVotingYes.length} Upvotes`}></button> */}
        <button name="yes" onClick={handleVote}>{`${movie.usersVotingYes.length} Upvotes`}</button>
        <button name="no" onClick={handleVote}>{`${movie.usersVotingNo.length} Downvotes`}</button>
      </div>
    </div>
  )
}
