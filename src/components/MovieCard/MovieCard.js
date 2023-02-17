export default function MovieCard({ movie }) {
  return (
    <li
      style={{
        listStyleType: 'none',
        backgroundImage: `url(${movie.thumbnail})`,
      }}
    >
      <div className="MovieCard">
        <div className="movieInfo">{movie.title}</div>
      </div>
    </li>
  )
}
