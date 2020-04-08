import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity,TextInput } from 'react-native';
import { Camera } from 'expo-camera'; 
import {Button,Input,Header,Container,Content,Item,Icon} from 'native-base'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons' 
import {Ionicons,FontAwesome,Feather} from '@expo/vector-icons'

export default function App({navigation}) {
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


  this.barcodeCodes = [];

 const onBarCodeRead=(scanResult)=>{
  console.warn(scanResult.type);
   console.warn(scanResult.data);
  if (scanResult.data != null) {
	if (!this.barcodeCodes.includes(scanResult.data)) {
	 this.barcodeCodes.push(scanResult.data);
	console.warn('onBarCodeRead call');
	 }
    }
   return;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1,justifyContent:'space-between'}} type={type}  onBarCodeRead={()=>onBarCodeRead()}>
          <View style={{flexDirection:'row',flex:4,marginTop:20}}>
         <Feather name="arrow-left" color='white' size={29} onPress={()=>navigation.navigate('Dash')} style={{marginBottom:8}}/>
           <View style={{flex:8,flexDirection:'row',marginLeft:200}}>
              <Icon name="ios-flash" style={{color:'white',fontWeight:'bold',marginLeft:20}}  />
              <Icon name="ios-reverse-camera"  onPress={() => {
                setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }} style={{color:'white',fontWeight:'bold',marginLeft:65}}/>
            </View>
            </View> 
    
        

        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,marginBottom:15,alignItems:'flex-end'}}>
        <MaterialCommunityIcons name="message-reply" style={{color:'white',fontSize:36}} >
          </MaterialCommunityIcons>
           <View  style={{alignItems:'center'}}>

           <MaterialCommunityIcons name="circle-outline" style={{color:'white',fontSize:80}} >
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