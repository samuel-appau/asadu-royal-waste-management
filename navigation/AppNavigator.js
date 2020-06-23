import React from 'react';
import {Dimensions} from 'react-native'
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator} from 'react-navigation-drawer';
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import MainTabNavigator from './MainTabNavigator';
import DashboardScreen from '../screens/DashboardScreen'
import NotificationScreen from '../screens/NotificationScreen'
import MenuDrawer from '../components/MenuDrawer'
import App from '../components/camera'
import AgentMemberScreen from '../screens/AgentMember'
import ForgetScreen from '../screens/ForgetScreen'
import MessageScreen from '../screens/MessageScreen'
import MemberScreen from '../screens/MemberScreen'
import AgentScreen from '../screens/AgentScreen'
import EntryApp from '../screens/EntryApp'
import AgentDashboard from '../screens/AgentDashboard'
import AppAgent from '../components/camera1'
import MapAgent from '../screens/MapAgent' 
import PaymentScreen from '../screens/Payment'
import Mapp from '../screens/Map'

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
  Message:{
        screen:NotificationScreen
  },
 Logout:{
      screen:EntryApp
 }
       },

  DrawerConfig


);




const DrawerNavigator1=createDrawerNavigator({

  home:{ 
         screen:AgentDashboard
       },
  Waste:{
        screen:NotificationScreen
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
  AgentDash:DrawerNavigator1,
  Client:LoginScreen,
  Register:RegisterScreen,
  Dash:DashboardScreen,
  Dash:DrawerNavigator,
  camera:App,
  camera1:AppAgent,
  Forget:ForgetScreen,
  Message:MessageScreen,
  member:MemberScreen,
  member1:AgentMemberScreen,
  map:Mapp,
  Agent:AgentScreen,
  GoBack:LoginScreen,
  Payment:PaymentScreen,
  map1:MapAgent,
  notification:NotificationScreen

}
)



export  default createAppContainer(Nav)
