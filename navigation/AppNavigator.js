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
import AgentScreen from '../screens/AgentScreen'
import EntryApp from '../screens/EntryApp'
import AgentDashboard from '../screens/AgentDashboard'
import AppAgent from '../components/camera1'
import MapAgent from '../screens/MapAgent'

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
      screen:EntryApp
 }
       },

  DrawerConfig


);




const DrawerNavigator1=createDrawerNavigator({

  home:{ 
         screen:DashboardScreen
       },
  Links:{
        screen:RegisterScreen
  },
 Logout:{
      screen:EntryApp
 }
       },

  DrawerConfig


);


const Nav= createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main:EntryApp,
  AgentDash:AgentDashboard,
  menu:DrawerNavigator1,
  Client:LoginScreen,
  Register:RegisterScreen,
  Dash:DashboardScreen,
  Dash:DrawerNavigator,
  camera:App,
  camera1:AppAgent,
  Forget:ForgetScreen,
  Message:MessageScreen,
  member:MemberScreen,
  map:Map,
  Agent:AgentScreen,
  GoBack:LoginScreen,
 
  map1:MapAgent

}
)



export  default createAppContainer(Nav)
