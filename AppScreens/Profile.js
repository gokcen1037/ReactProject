import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, TouchableOpacity, Button, Image, SafeAreaView, FlatList,ActivityIndicator } from 'react-native';

function ProfileScreen({ route, navigation }) {
  const { loginUser } = route.params;
  return (
    <SafeAreaView style={styles.container} >
       <View style={styles.containerImage}> 
         <Image
          style={styles.circle}
          source={{
            uri: loginUser.avatar_url,
          }}
        />
        <Text style={styles.logo}>{loginUser.name}</Text> 
        <Text style={styles.text}>{loginUser.location}</Text> 
        <Text style={styles.text}>{"Since : " + loginUser.created_at}</Text> 
        <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
       </View> 
    </SafeAreaView>
  );
}
export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
  },
  containerImage: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    //justifyContent: 'center'
    paddingTop: 10
  },
  containerList: {
    flex: 1,
    //paddingTop: 10,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#fb5b5a",
    marginBottom: 20
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 100
  },
  item: {
    backgroundColor: '#fff',
    padding: 5,
    marginVertical: 2,
    marginHorizontal: 4,
  },
  title: {
    fontSize: 32,
  },
  text: {
    color: "#fb5b5a",
    fontSize: 15,
  },
});

