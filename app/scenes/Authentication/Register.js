import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput
} from 'react-native'

import ViewContainer from '../../components/ViewContainer'
import StatusbarBackground from '../../components/StatusbarBackground'
import { styles } from './styles'

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }


  render() {
    return (
      <ViewContainer>
      <StatusbarBackground />
        <View>
          <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
          placeholder="Email"
          placeholderTextColor="#939db0"
          autoCorrect={false}
          />
          <View style={styles.hairline} />

          <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#939db0"
          autoCorrect={false}
          />
          <View style={styles.hairline} />

        </View>
      </ViewContainer>
    )
  }
}
