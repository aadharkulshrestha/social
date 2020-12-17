import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';


import WelcomeScreen from './screens/WelcomeScreen';
import Exchange from './screens/Exchange';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import MyBartersScreen from './screens/MyBartersScreen';
import NotificationScreen from './screens/NotificationsScreen';
import ReceiverDetailsScreen from './screens/ReceiverDetailsScreen';
export default function App() {
  return (
    <AppContainer/>
  );
}

var AppNavigator = createSwitchNavigator({
  WelcomeScreen:WelcomeScreen,
  HomeScreen:HomeScreen,
  Exchange:Exchange,
  SettingScreen:SettingScreen,
  MyBartersScreen:MyBartersScreen,
  NotificationScreen:NotificationScreen,
  ReceiverDetailsScreen:ReceiverDetailsScreen
})

const AppContainer =  createAppContainer(AppNavigator);
