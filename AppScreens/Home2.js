import * as React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, TouchableOpacity, Button, Image, SafeAreaView, FlatList,ActivityIndicator } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { Alert } from 'react-native';
import HomeScreen from './Home'
import ProfileScreen from './Profile'
import LoginScreen from './Login'
const Tab = createMaterialTopTabNavigator ();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function GoToButton({ screenName, buttonText }) {
  const navigation = useNavigation();

  return (
    <Button
      title={`${buttonText}`}
      onPress={() => navigation.navigate(screenName)}
    />
  );
}
export default function Home2Screen({ route }) {
  const { loginUser } = route.params;
  const navigation = useNavigation();
  return (
    // <Tab.Navigator tabBarPosition="bottom" initialRouteName="Profil">
    //   <Tab.Screen name={"Profil("+ loginUser.login + ")"}component={ProfileScreen} initialParams={{ loginUser: loginUser }} /> 
    //   <Tab.Screen name={"My Repos(" + loginUser.login + ")"} component={DetailsScreen} initialParams={{ loginUser: loginUser }} /> 
    //   <Tab.Screen name={"Followers (" + loginUser.followers + ")"} component={GetFollowers} initialParams={{ loginUser: loginUser }} />
    //   <Tab.Screen name={"Followings (" + loginUser.following + ")"} component={GetFollowings} initialParams={{ loginUser: loginUser }} />
    // </Tab.Navigator>
    <Drawer.Navigator initialRouteName="Profile">
       <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: true }}  initialParams={{ loginUser: loginUser }}/>
       <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: true, drawerLabel: 'My Lists' }} initialParams={{ loginUser: loginUser }}/>
       <Drawer.Screen name="Login" component={LoginScreen} options={{ headerShown: false , drawerLabel: 'Log Out' }} initialParams={{ loginUser: loginUser }}/>
     </Drawer.Navigator>
  );

}