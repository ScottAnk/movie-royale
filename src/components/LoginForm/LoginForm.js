import { useState } from 'react'
import * as usersService from '../../utilities/users-service'
import { useNavigate } from 'react-router-dom'

export default function LoginForm({ setUser, handleShowSignUp, showSignUp }) {
  const navigate = useNavigate()
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
      navigate('/room/create')
    } catch {
      setError('Log In Failed - Try Again')
    }
  }

  return (
    <div>
      <div className="CardContainer">
        <h2 className="AuthHeader">
          <u>Let's Get'cha Logged In</u>
        </h2>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter Email Address"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="AuthSubmit">
            LOGIN
          </button>
        </form>
        <div className="BreakContainer">
          <div className="SectionBreak"></div>
        </div>
        <div className="LoginOrSignUp">
          <h3
            style={{
              marginTop: '-10px',
              marginBottom: '5px',
            }}
          >
            Don't have an account yet?
          </h3>
          <button onClick={handleShowSignUp}>
            {showSignUp ? 'Login To Your Account' : 'Create New Account'}
          </button>
        </div>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  )
}
