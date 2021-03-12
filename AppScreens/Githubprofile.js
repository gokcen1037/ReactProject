import * as React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

function GithubProfileScreen({ route,navigation }) {
  const { html_url } = route.params;
  
  return (
    <WebView
        source={{ uri: html_url }}
        style={{ marginTop: 20 }}
      />
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
export default GithubProfileScreen