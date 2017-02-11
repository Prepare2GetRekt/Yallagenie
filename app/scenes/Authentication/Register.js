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
import Login from '../../scenes/Authentication/Login'
import { firebaseRef } from '../../services/Firebase'
import { Actions } from 'react-native-router-flux'


export default class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullname: '',
      email: '',
      password: ''
    }
    this._register = this._register.bind(this)

  }

  _register() {
    firebaseRef.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error){
      if(error){
        switch(error.code){

          case "auth/email-already-in-use":
            alert("This email is already in use");
          break;

          case "auth/invalid-email":
            alert("The specified email is not a valid email.");
          break;

          case "auth/weak-password":
          alert("You have entered a weak password, try again with a stronger one.");
          break;

          case "auth/operation-not-allowed":
          alert("This account has been disabled. Please contact support@yallagenie.com");
          break;

          default:
            alert("Error creating user");
        }

      } else {
        alert("Your account was created!");
      }
    })
  }

  _login() {
    Actions.login()
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
            <Text style={styles.loginText} onPress={this._register}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.register}>
        <Text style={styles.registerFirstText}>Already have an account?</Text>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerText} onPress={this._login}> Sign in</Text>
          </TouchableOpacity>
        </View>

      </ViewContainer>
    )
  }
}
