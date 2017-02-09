import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
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
      <View style={styles.logo}>
        <Text style={styles.logoText}>Yalla Genie</Text>
      </View>

      <View style={styles.headline}>
        <Text style={styles.headlineText}>Welcome Back!</Text>
        <Text style={styles.subheadlineText}>Sign In to continue to Yalla Genie</Text>
      </View>

        <View style={styles.textForm}>
          <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
          placeholder="Email"
          placeholderTextColor="#939db0"
          autoCorrect={false}
          returnKeyType="next"
          autoCapitalize="none"
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
          returnKeyType="done"
          />
          <View style={styles.hairline} />
        </View>

        <View style={styles.login}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.register}>
        <Text style={styles.registerFirstText}>Dont have an account?</Text>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerText}> Sign up</Text>
          </TouchableOpacity>
        </View>

      </ViewContainer>
    )
  }
}
