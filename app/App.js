import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import ViewContainer from './components/ViewContainer'
import StatusbarBackground from './components/StatusbarBackground'

export default class App extends Component {
  render() {
    return (
      <ViewContainer>
      <StatusbarBackground />
        <Text>
          Dude
        </Text>
      </ViewContainer>
    )
  }
}
