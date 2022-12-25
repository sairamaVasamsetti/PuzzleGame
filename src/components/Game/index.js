import './index.css'

const Game = props => {
  const getUserDetails = localStorage.getItem('puzzleGameUserDetails')
  const userDetails = JSON.parse(getUserDetails)

  if (userDetails === null) {
    const {history} = props
    history.replace('/signup')
  }

  return (
    <>
      <div className="nav">
        <p className="user-name">{userDetails.name}</p>
        <img
          src={userDetails.profilePicture}
          alt="loading"
          className="profile"
        />
      </div>
      <div className="game">
        <div className="game-container">
          <div className="grid">
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button">10</button>
            <button type="button">11</button>
            <button type="button">12</button>
            <button type="button">13</button>
            <button type="button">14</button>
            <button type="button">15</button>
            <button type="button">0</button>
          </div>

          <div className="footer">
            <p className="moves">Moves: 0</p>
            <p className="timer">Time: 00</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Game
