import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';

import MessageScreen from '../screens/MessageScreen';
import LoginScreen from '../screens/LoginScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: LoginScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      name= "ios-home"
      
    />
  ),
};

HomeStack.path = '';

const SearchStack = createStackNavigator(
  {
    Links: SearchScreen,
  },
  config
);

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon name="ios-search" />
  ),
};

SearchStack.path = '';

const NotificationStack = createStackNavigator(
  {
    Settings: NotificationScreen,
  },
  config
);

NotificationStack.navigationOptions = {
  tabBarLabel: 'Notifications',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="ios-notifications" />
  ),
};

NotificationStack.path = '';



const MessageStack = createStackNavigator(
  {
    Settings: MessageScreen,
  },
  config
);

MessageStack.navigationOptions = {
  tabBarLabel: 'Mail',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="ios-mail" />
  ),
};

MessageStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SearchStack,
  NotificationStack,
  MessageStack,
});

tabNavigator.path = '';

export default tabNavigator;
