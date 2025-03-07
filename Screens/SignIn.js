import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useContext } from "react";
import {AuthContext} from './Auth';
import { TextInput } from 'react-native-gesture-handler';




const SignIn = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
  
    const handleLogin = () => {
      if (login(username, password)) {
        navigation.replace("Dashboard");
      } else {
        alert("Invalid credentials!");
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style= {styles.title}>Expense Check</Text>
        <View style={styles.signContainer}>
        <Text style={styles.sign}>Sign In</Text>
        <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={styles.input} />
        <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
        <TouchableOpacity style={styles.loginBox} onPress={handleLogin}>
            <Text style={styles.login}>Login</Text></TouchableOpacity>
        </View>
      </View>
    );
  };

export default SignIn;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    title: { fontSize: 32, margin:20, color:'#FF7C4E', fontFamily:'Times New Roman'},
    sign: { fontSize: 24, margin: 20, color:'white'},
    input: { width: 300, padding: 10, borderWidth: 1, marginBottom: 10, marginLeft:20, marginRight:20, borderColor:'white', color:'white' },
    signContainer:{borderColor:'#FF7C4E', borderWidth:3, justifyContent:'center', alignItems:'center' , backgroundColor:'#FF7C4E', borderRadius:8},
    login:{color:'#FF7C4E', fontSize:24, margin:10},
    loginBox:{backgroundColor:'white', width:300, alignItems:'center', borderRadius:8, margin:10},
  });
  
