import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { handleRegister } from '../services/authService'

const RegisterScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {
        handleRegister(email, password)
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Register</Text>

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
                <TouchableOpacity style={styles.button} onPress={register}>
                    <Text style={styles.buttonText}>Sign Up Button</Text>
                </TouchableOpacity>

                {/* Register Navigation */}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("LoginScreen")}>
                    <Text style={styles.buttonText}>Already Have an Account? Log In Here!</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

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

export default RegisterScreen