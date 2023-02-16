import { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false)
  return (
    <main>
      {/* if showSignUp is false, set it to true and vice versa */}
      <button onClick={() => setShowSignUp(!showSignUp)}>
        {showSignUp ? 'Log In' : 'Sign Up'}
      </button>
      {showSignUp ? (
        <SignUpForm setUser={setUser} />
      ) : (
        <LoginForm setUser={setUser} />
      )}
    </main>
  )
}
