import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Text} from 'react-native'

import InitialScreen from './components/InitialScreen';
import Main from './components/Main';
import JoinTournament from './components/user/JoinTournament';
import CreateTournament from './components/user/CreateTournament';
import Register from './components/register/Register';
import RegisterPwd from './components/register/RegisterPwd';
import User from './components/user/User';
import BackgroundImage from './components/common/BackgroundImage';

const Stack = new createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BackgroundImage image={require('./assets/padel-bg.jpg')}/>
      <Stack.Navigator >
        <Stack.Screen options={{headerShown:false}} name="InitialScreen" component={InitialScreen}/>
        <Stack.Screen options={{headerShown:false}} name="Main" component={Main}/>
        <Stack.Screen options={{headerShown: false}} name="JoinTournament" component={JoinTournament}/>
        <Stack.Screen options={{headerShown: false}} name="CreateTournament" component={CreateTournament}/>
        <Stack.Screen options={{headerShown: false}} name="Register" component={Register}/>
        <Stack.Screen options={{headerShown: false}} name="RegisterPwd" component={RegisterPwd}/>
        <Stack.Screen options={{headerShown: false}} name="User" component={User}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;