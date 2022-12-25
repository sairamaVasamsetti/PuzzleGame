import {Route, Switch} from 'react-router-dom'

import Game from './components/Game'
import Signup from './components/Signup'
import LoginForm from './components/LoginForm'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/signup" component={Signup} />

    <Route exact path="/" component={Game} />
  </Switch>
)

export default App
