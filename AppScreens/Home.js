import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Alert } from 'react-native';
import GetFollowers from '../AppScreens/Followers'
import GetFollowings from '../AppScreens/Followings'
import MyReposScreen from '../AppScreens/MyRepos'
import ProfileScreen from './Profile';
import LoginScreen from '../AppScreens/Login'
const Tab = createMaterialTopTabNavigator ();

export default function HomeScreen({ route, navigation }) {
  const { loginUser } = route.params;
  return (
    <Tab.Navigator tabBarPosition="bottom" initialRouteName="Profil">
      {/* <Tab.Screen name={"Profil("+ loginUser.login + ")"}component={ProfileScreen} initialParams={{ loginUser: loginUser }} />  */}
      <Tab.Screen name={"My Repos(" + loginUser.login + ")"} component={MyReposScreen} initialParams={{ loginUser: loginUser }} /> 
      <Tab.Screen name={"Followers (" + loginUser.followers + ")"} component={GetFollowers} initialParams={{ loginUser: loginUser }} />
      <Tab.Screen name={"Followings (" + loginUser.following + ")"} component={GetFollowings} initialParams={{ loginUser: loginUser }} />
    </Tab.Navigator>
    
  );

}