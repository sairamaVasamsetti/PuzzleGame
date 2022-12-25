import {useState} from 'react'
import {Redirect} from 'react-router-dom'
import './index.css'

const LoginForm = props => {
  const [mail, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showErrorMsg, toggleErrorMsg] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const onChangeEmail = event => setEmail(event.target.value)
  const onChangePassword = event => setPassword(event.target.value)

  const onSubmitForm = event => {
    event.preventDefault()
    const getUserDetails = localStorage.getItem('puzzleGameUserDetails')
    const userDetails = JSON.parse(getUserDetails)

    if (userDetails.email === mail && userDetails.password === password) {
      const {history} = props
      history.replace('/')
    } else if (
      userDetails.email === mail &&
      userDetails.password !== password
    ) {
      toggleErrorMsg(true)
      setErrorMsg('Incorrect password.')
    } else {
      toggleErrorMsg(true)
      setErrorMsg(
        "The email address you entered isn't connected to an account. Find your account and log in.",
      )
    }
  }

  const getUserDetailsData = localStorage.getItem('puzzleGameUserDetails')
  const userDetailsData = JSON.parse(getUserDetailsData)

  if (userDetailsData === null) {
    return <Redirect to="/signup" />
  }

  return (
    <div className="loginBgContainer">
      <div className="loginFormContainer">
        <h1 className="heading">Puzzle Game</h1>
        <form className="form" onSubmit={onSubmitForm}>
          <label className="label" htmlFor="email">
            EMAIL
          </label>
          <input
            type="email"
            className="input-field"
            value={mail}
            onChange={onChangeEmail}
            required
          />
          <label className="label" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            className="input-field"
            value={password}
            onChange={onChangePassword}
            required
          />
          <button type="submit" className="loginButton">
            Login
          </button>
          {showErrorMsg && <p className="errorMsg">* {errorMsg}</p>}
        </form>
      </div>
    </div>
  )
}

export default LoginForm
