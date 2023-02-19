import { Component } from 'react'
import { signUp } from '../../utilities/users-service'

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
  }

  handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      const formData = { ...this.state }
      delete formData.confirm
      delete formData.error
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData)
      // Update user state with user
      this.props.setUser(user)
    } catch {
      // Invalid signup
      this.setState({
        error: 'Sign Up Failed - Try Again',
      })
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: '',
    })
  }

  render() {
    const disable = this.state.password !== this.state.confirm
    return (
        <div>
          <div className="CardContainer">
            <h2 className="AuthHeader">
              <u>Let's Sign Ya Up!</u>
            </h2>
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <label>Confirm</label>
              <input
                type="password"
                name="confirm"
                placeholder="Re-Enter Password"
                value={this.state.confirm}
                onChange={this.handleChange}
                required
              />
              <button type="submit" disabled={disable} className="AuthSubmit">
                SIGN UP
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
                Already have an account?
              </h3>
              <button onClick={this.props.handleShowSignUp}>
                {this.props.showSignUp
                  ? 'Login To Your Account'
                  : 'Create New Account'}
              </button>
            </div>
          </div>
          <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
    )
  }
}
