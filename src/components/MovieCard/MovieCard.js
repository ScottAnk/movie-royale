export default function MovieCard({ movie }) {
  return (
    <div className="MovieCard">
      <li
        style={{
          listStyleType: 'none',
          backgroundImage: `url(${movie.thumbnail})`,
        }}
      >
        <div className="movieInfo">{movie.title}</div>
      </li>
    </div>
  )
}
