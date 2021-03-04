import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import GetFollowers from '../AppScreens/Followers'
import GetFollowings from '../AppScreens/Followings'
import DetailsScreen from '../AppScreens/Details'

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen({ route, navigation }) {
  const { loginUser } = route.params;
  return (
    <Tab.Navigator tabBarPosition="bottom" initialRouteName="DetailsScreen">
      <Tab.Screen name="My Repos" component={DetailsScreen} initialParams={{ loginUser: loginUser }} /> 
      <Tab.Screen name={"Followers (" + loginUser.followers + ")"} component={GetFollowers} initialParams={{ loginUser: loginUser }} />
      <Tab.Screen name={"Followings (" + loginUser.following + ")"} component={GetFollowings} initialParams={{ loginUser: loginUser }} />
    </Tab.Navigator>
  );

}