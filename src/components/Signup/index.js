import {useState} from 'react'
import {Redirect} from 'react-router-dom'

import './index.css'

const Signup = props => {
  const [name, setName] = useState('')
  const [dateOfBirth, setDate] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [profile, setProfile] = useState('')
  const [password, setPassword] = useState('')

  const onChangeName = event => setName(event.target.value)
  const onChangeDate = event => setDate(event.target.value)
  const onChangePhoneNumber = event => setPhoneNumber(event.target.value)
  const onChangeEmail = event => setEmail(event.target.value)
  const onChangeAddress = event => setAddress(event.target.value)
  const onChangePassword = event => setPassword(event.target.value)

  const onChangeImage = event => {
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfile(reader.result)
      }
    }
    reader.readAsDataURL(event.target.files[0])
  }

  const onSubmitForm = event => {
    event.preventDefault()
    const userDetails = {
      name,
      dateOfBirth,
      email,
      phoneNumber,
      address,
      password,
      profilePicture: profile,
      steps: 0,
      bestTiming: 0,
    }

    localStorage.setItem('puzzleGameUserDetails', JSON.stringify(userDetails))
    const {history} = props
    history.replace('/login')
  }

  const getUserDetailsData = localStorage.getItem('puzzleGameUserDetails')
  const userDetailsData = JSON.parse(getUserDetailsData)
  if (userDetailsData !== null) {
    return <Redirect to="/login" />
  }
  return (
    <div className="login-form-container">
      <form className="form-container" onSubmit={onSubmitForm}>
        <h1 className="heading">Puzzle Game</h1>
        <div className="input-container">
          <label className="input-label" htmlFor="name">
            FULL NAME
          </label>
          <input
            type="text"
            className="input"
            id="name"
            placeholder="Full Name"
            onChange={onChangeName}
            value={name}
            required
          />
          <label className="input-label" htmlFor="date">
            DATE OF BIRTH
          </label>
          <input
            type="date"
            className="input"
            id="date"
            value={dateOfBirth}
            onChange={onChangeDate}
            required
          />
          <label className="input-label" htmlFor="number">
            PHONE NUMBER
          </label>
          <input
            type="text"
            className="input"
            id="number"
            placeholder="Phone Number"
            onChange={onChangePhoneNumber}
            value={phoneNumber}
            required
          />
          <label className="input-label" htmlFor="email">
            EMAIL
          </label>
          <input
            type="email"
            className="input"
            id="email"
            placeholder="Email"
            onChange={onChangeEmail}
            value={email}
            required
          />
          <label className="input-label" htmlFor="ad">
            ADDRESS
          </label>
          <input
            type="text"
            className="input"
            id="ad"
            placeholder="Address"
            onChange={onChangeAddress}
            value={address}
            required
          />
          <label className="input-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            className="input"
            id="password"
            placeholder="Password"
            onChange={onChangePassword}
            value={password}
            required
          />
          <label className="input-label" htmlFor="password">
            PROFILE PICTURE
          </label>
          <input
            type="file"
            accept="Image/*"
            className="image-input"
            onChange={onChangeImage}
            required
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

export default Signup
