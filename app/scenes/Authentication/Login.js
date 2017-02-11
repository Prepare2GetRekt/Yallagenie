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
import _ from 'lodash'
import { firebaseRef } from '../../services/Firebase'
import { Actions } from 'react-native-router-flux'

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      status: ''
    }

    this._login = this._login.bind(this)
    this._register = this._register.bind(this)

  }

  _login() {
    firebaseRef.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {

      if(error) {
        switch(error.code){

          case "auth/user-not-found":
            alert("This user could not be found.");
          break;

          case "auth/invalid-email":
            alert("The specified email is not a valid email.");
          break;

          case "auth/wrong-password":
          alert("Wrong password entered");
          break;

          case "auth/user-disabled":
          alert("This account has been disabled. Please contact support@yallagenie.com");
          break;

          default:
            alert("Error creating user");
        }

      } else {
        alert("Successfully logged in!");

      }
    })
    Actions.profile()
  }

  _register() {
    Actions.register()
  }

  _onFocus() {

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
            onFocus = {this.onFocus}
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
          <TouchableOpacity style={styles.loginButton} onPress={this._login}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.register}>
        <Text style={styles.registerFirstText}>Dont have an account?</Text>
          <TouchableOpacity style={styles.registerButton} onPress={this._register}>
            <Text style={styles.registerText}> Sign up</Text>
          </TouchableOpacity>
        </View>

      </ViewContainer>
    )
  }
}
