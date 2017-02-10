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

export default class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullname: '',
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
        <Text style={styles.headlineText}>Hey Welcome!</Text>
        <Text style={styles.subheadlineText}>Registration only takes 2 seconds</Text>
      </View>

        <View style={styles.textForm}>
          <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({fullname: text})}
          value={this.state.fullname}
          placeholder="Full Name"
          placeholderTextColor="#939db0"
          autoCorrect={false}
          returnKeyType="next"
          autoCapitalize="none"
          />
          <View style={styles.hairline} />

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
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.loginText}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.register}>
        <Text style={styles.registerFirstText}>Already have an account?</Text>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerText}> Sign in</Text>
          </TouchableOpacity>
        </View>

      </ViewContainer>
    )
  }
}
