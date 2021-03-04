import * as React from 'react';
import { StyleSheet, Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import axios from 'axios'

function LoginScreen({ navigation }) {
  let [quote, setQuote] = React.useState('')
  let [userName, setUserName] = React.useState('')
  const [data, setData] = React.useState({});
  let url = "https://api.github.com/users/";
  const nn = useNavigation();
  const axiosApiCall = (navigate) => {
    axios({
      "method": "GET",
      "url": url + userName
    })
      .then((response) => {
        
        setData(response.data);
        //alert(data.name);
        nn.navigate('Home', {
          loginUser: response.data
        });
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      })
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>WELCOME TO REACT</Text>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="User Name..."
          placeholderTextColor="#003f5c"
          onChangeText={text => setUserName(text)} />
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c" />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => axiosApiCall()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center'
    },
    logo: {
      fontWeight: "bold",
      fontSize: 30,
      color: "#fb5b5a",
      marginBottom: 40
    },
    inputView: {
      width: "80%",
      backgroundColor: "#465881",
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      justifyContent: "center",
      padding: 20
    },
    inputText: {
      height: 50,
      color: "white"
    },
    loginBtn: {
      width: "80%",
      backgroundColor: "#fb5b5a",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      marginBottom: 10
    },
    loginText: {
      color: "white"
    },
    title: {
      fontSize: 35,
      color: '#fff'
    },
    button: {
      padding: 10,
      marginVertical: 15,
      backgroundColor: '#0645AD'
    },
    buttonText: {
      color: '#fff'
    }
  });
export default LoginScreen