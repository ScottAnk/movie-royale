import { useState } from 'react'
import * as usersService from '../../utilities/users-service'

export default function LoginForm({ setUser, handleShowSignUp, showSignUp }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
    setError('')
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault()
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials)
      setUser(user)
    } catch {
      setError('Log In Failed - Try Again')
    }
  }

  return (
    <div>
      <div className="CardContainer">
        <h2>Let's Get'cha Logged In</h2>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">LOG IN</button>
        </form>
				<div style={{marginBottom: "10px"}}></div>
        <div className="LoginOrSignUp">
          <h5
            style={{
              marginTop: '3px',
              marginBottom: '5px',
            }}
          >
            Don't have an account yet?
          </h5>
          <button onClick={handleShowSignUp}>
            {showSignUp ? 'Log In' : 'Sign Up'}
          </button>
        </div>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  )
}
