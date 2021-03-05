import 'react-native-gesture-handler';
import * as React from 'react';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './AppScreens/Home'
import Home2Screen from './AppScreens/Home2'
import LoginScreen from './AppScreens/Login'
import ProfileScreen from './AppScreens/Profile'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Login">
       <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
       <Stack.Screen name="Home" component={Home2Screen} options={{ headerShown: false }} />
     </Stack.Navigator>
     {/* <Drawer.Navigator initialRouteName="Login">
       <Drawer.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
       <Drawer.Screen name="Home" component={Home2Screen} options={{ headerShown: false }}/>
     </Drawer.Navigator> */}
   </NavigationContainer>
 );
}

export default App;