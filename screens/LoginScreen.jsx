import { TextInput, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { handleLogin } from '../services/authService';

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //  Login Function
  const login = () => {
    handleLogin(email, password)
  }

  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Text>Login</Text>

        <TextInput
          style={styles.inputField}
          placeholder="Your Email"
          onChangeText={newText => setEmail(newText)}
          defaultValue={email}
        />

        <TextInput
          style={styles.inputField}
          placeholder="Your Password"
          onChangeText={newText => setPassword(newText)}
          defaultValue={password}
        />

        {/* Superior buttons */}
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Login Button</Text>
        </TouchableOpacity>

        {/* TODO: Add Register Navigation */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.buttonText}>Don't Have an Account? Register Here!</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  inputField: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 15
  },
  button: {
    backgroundColor: "green",
    textAlign: 'center',
    padding: 10,
    marginTop: 30
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  }
})