export default function MovieCard({ movie }) {
  return (
    <li style={{ listStyleType: 'none' }}>
      <div
        className="MovieCard"
        // style={{
        //   backgroundImage: `url('${movie.posterPath}')`,
        //   backgroundPosition: 'center',
        //   backgroundSize: 'contain',
        //   width: '100%',
        //   height: '400px',
        //   backgroundRepeat: 'no-repeat',
        // }}
      >
        <div className="movieInfo">
          {/* <h2 style={{ backgroundColor: 'blue' }}>{movie.title}</h2>
          <h3 style={{ backgroundColor: 'blue' }}>{movie.releaseDate}</h3> */}
        </div>
      </div>
    </li>
  )
}
