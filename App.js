import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react';
import { instaImage } from './assets';

export class App extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Image
          resizeMode="contain"
          style={styles.tinyLogo}
          source={instaImage}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity style={styles.forgotOpacity}>
          <Text style={styles.forgotText}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginOpacity}>
          <View style={styles.loginView}>
            <Text
              style={styles.loginText}>
              Log In
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //borderWidth: 5,
    //borderColor: 'red'
  },
  tinyLogo: {
    width: '90%',
    height: 100,
    marginBottom: 80,
    //borderWidth: 5,
    //borderColor: 'red'
  },
  input: {
    width: '90%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#cccccc',
    borderRadius: 6,
    backgroundColor: '#e5e5e5',
  },
  forgotText: {
    textAlign: 'right',
    textDecorationLine: 'underline',
    color: 'skyblue',
  },
  forgotOpacity: {
    width: '90%'
  },
  loginOpacity: {
    width: '90%'
  },
  loginView: {
    marginTop: 60,
    backgroundColor: 'skyblue'
  },
  loginText: {
    paddingVertical: 10,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default App;
