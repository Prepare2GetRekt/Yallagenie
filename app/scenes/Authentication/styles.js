import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  logo: {
    paddingLeft: 30,
    paddingRight: 30,
    flex: 2,
    flexDirection:'row',
    alignItems:'center'

  },
  logoText: {
    fontFamily: 'Avenir-Medium',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    letterSpacing: 0.5,
    fontSize: 32,
    backgroundColor: '#18a2df',
    color: 'white'
  },
  headline: {
    flex: 2,
    paddingLeft: 40,
    paddingRight: 40
  },
  headlineText: {
    marginTop: 10,
    letterSpacing: 0.5,
    fontFamily: 'Avenir-Roman',
    fontSize: 28,
    color: '#47535d'
  },
  subheadlineText: {
    marginTop: 5,
    letterSpacing: 0.5,
    fontFamily: 'Avenir',
    fontSize: 24,
    color: '#808b9c'
  },
  textForm: {
    flex: 2
  },
  login: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40
  },
  loginButton: {
    width: 70
  },
  loginText: {
    paddingTop: 20,
    paddingBottom: 20,
    letterSpacing: 0.5,
    fontFamily: 'Avenir-Medium',
    fontSize: 22,
    color: '#17a2e0'
  },
  register: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
    flexDirection: 'row'
  },
  registerButton: {

  },
  registerFirstText: {
    fontFamily: 'Avenir',
    letterSpacing: 0.5,
    color: '#a1aab7'
  },
  registerText: {
    fontFamily: 'Avenir-Medium',
    letterSpacing: 0.5,
    color: '#8894a4'
  },
  textInput: {
    height: 50,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
    paddingBottom: 10,
    fontFamily: 'Avenir',
    fontSize: 17
  },
  hairline: {
    height: 2,
    backgroundColor: '#16a2e0',
    marginLeft: 40,
    marginRight: 40
  }
})
