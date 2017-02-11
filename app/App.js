import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import Login from './scenes/Authentication/Login'
import Register from './scenes/Authentication/Register'
import Profile from './scenes/Profile'
import { Router, Scene } from 'react-native-router-flux'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key={'root'}>
          <Scene
          key={'login'}
          component={Login}
          initial={true}
          hideNavBar={true}
          />
          <Scene
          key={'register'}
          component={Register}
          />
          <Scene
          key={'profile'}
          component={Profile}
          />
        </Scene>
      </Router>
    )
  }
}
