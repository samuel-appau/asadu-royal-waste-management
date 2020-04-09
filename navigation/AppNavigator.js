import React from 'react';
import {Dimensions} from 'react-native'
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator} from 'react-navigation-drawer';
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import MainTabNavigator from './MainTabNavigator';
import DashboardScreen from '../screens/DashboardScreen'
import MenuDrawer from '../components/MenuDrawer'
import App from '../components/camera'
import ForgetScreen from '../screens/ForgetScreen'
import MessageScreen from '../screens/MessageScreen'
import MemberScreen from '../screens/MemberScreen'

import Map from '../screens/Map'

const WIDTH=Dimensions.get('window').width;

const DrawerConfig={
  drawerWidth: WIDTH*0.80,
  contentComponent:({navigation})=>{
    return(<MenuDrawer navigation={navigation}/>)

  }
} 



const DrawerNavigator=createDrawerNavigator({

  home:{ 
         screen:DashboardScreen
       },
  Links:{
        screen:RegisterScreen
  },
 Logout:{
      screen:LoginScreen
 }
       },

  DrawerConfig


);


const Nav= createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main:LoginScreen,
  Register:RegisterScreen,
  Dash:DashboardScreen,
  Dash:DrawerNavigator,
  camera:App,
  Forget:ForgetScreen,
  Message:MessageScreen,
  member:MemberScreen,
  map:Map
}
)



export  default createAppContainer(Nav)
