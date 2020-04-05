import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity,TextInput } from 'react-native';
import { Camera } from 'expo-camera'; 
import {Button,Input,Header,Container,Content,Item,Icon} from 'native-base'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons' 
import {Ionicons,FontAwesome} from '@expo/vector-icons'

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1,justifyContent:'space-between'}} type={type}>
         
           <Header searchBar rounded  style={{position:'absolute',backgroundColor:'transparent',left:0,top:0,right:0,zIndex:100,alignItems:'center'}}>
           <View style={{flexDirection:'row',flex:4,}}>
           <View style={{borderRadius:60,backgroundColor:"#c4c4c4",height:28,width:28}}>
         <Ionicons  name='ios-person'  size={25} color="yellow" style={{borderRadius:20,marginLeft:4}}/>
          </View>
        <FontAwesome name="circle" size={14} color='yellow' style={{marginLeft:-10}}/>
             <Item style={{backgroundColor:'transparent'}}>
               <Icon name="ios-search" style={{color:'white',fontWeight:'bold',fontSize:24}}></Icon>

               <Input  placeholder="Search" placeholderTextColor="white"/>
             </Item>
           </View>

           <View style={{flexDirection:'row',flex:2}}>
              <Icon name="ios-flash" style={{color:'white',fontWeight:'bold',marginLeft:20}}  />
              <Icon name="ios-reverse-camera"  onPress={() => {
                setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }} style={{color:'white',fontWeight:'bold',marginLeft:65}}/>
           </View> 
           </Header>
        

        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,marginBottom:15,alignItems:'flex-end'}}>
        <MaterialCommunityIcons name="message-reply" style={{color:'white',fontSize:36}} >
          </MaterialCommunityIcons>
           <View  style={{alignItems:'center'}}>

           <MaterialCommunityIcons name="circle-outline" style={{color:'white',fontSize:80}}>
          </MaterialCommunityIcons>
        <Icon name="ios-images" style={{color:'white',fontSize:36}}></Icon>
            
        </View>
            
            <MaterialCommunityIcons name="google-circles-communities" style={{color:'white',fontSize:36}}>
            
          </MaterialCommunityIcons>

        </View>
      </Camera>
    </View>
  );
}