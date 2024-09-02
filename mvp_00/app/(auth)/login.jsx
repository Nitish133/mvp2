import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <Animatable.View 
        animation="fadeInUpBig"
        duration={1500}
        style={styles.loginContainer}
      >
        <Animatable.Text 
          animation="pulse" 
          easing="ease-out" 
          iterationCount="infinite"
          style={styles.title}
        >
          Welcome Back
        </Animatable.Text>

        <Animatable.View animation="slideInLeft" delay={500} style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={24} color="#4c669f" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#666"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </Animatable.View>

        <Animatable.View animation="slideInRight" delay={700} style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={24} color="#4c669f" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#666"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
        </Animatable.View>

        <Animatable.View animation="fadeIn" delay={1000}>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </Animatable.View>

        <Animatable.View animation="bounceIn" delay={1500}>
          <TouchableOpacity style={styles.loginButton}>
            <LinearGradient
              colors={['#192f6a', '#3b5998', '#4c669f']}
              style={styles.gradient}
            >
              <Link href={"(states)"}>
                <Text style={styles.loginText}>LOGIN</Text>
              </Link>
            
            </LinearGradient>
          </TouchableOpacity>
        </Animatable.View>

        <Animatable.View 
          animation="fadeInUpBig"
          delay={2000}
          style={styles.signupContainer}
        >
          
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity>
            <Link href={"signup"}>
             <Text style={styles.signupLink}>Sign Up</Text>
            </Link>
           
          </TouchableOpacity>
        </Animatable.View>
      </Animatable.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: width * 0.9,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4c669f',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#4c669f',
    marginBottom: 20,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#333',
  },
  forgotPassword: {
    color: '#4c669f',
    marginBottom: 20,
  },
  loginButton: {
    width: width * 0.7,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginTop: 20,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    color: '#666',
  },
  signupLink: {
    color: '#4c669f',
    fontWeight: 'bold',
  },
});

export default LoginScreen;