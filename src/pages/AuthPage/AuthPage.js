import { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import './AuthPage.css'

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false)

  function handleShowSignUp() {
    setShowSignUp(!showSignUp)
  }

  return (
    <main>
      <h1 className="AppTitle">Movie Royale</h1>
      <div className="PageContainer">
        <div>
          {showSignUp ? (
            <SignUpForm
              setUser={setUser}
              showSignUp={showSignUp}
              handleShowSignUp={handleShowSignUp}
            />
          ) : (
            <LoginForm
              setUser={setUser}
              showSignUp={showSignUp}
              handleShowSignUp={handleShowSignUp}
            />
          )}
        </div>
      </div>
    </main>
  )
}
