import React from 'react';
import MapView,{ PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {Feather} from '@expo/vector-icons'

export default function Map({navigation}){
    return (
      <View style={styles.container}>
      <View style={{flexDirection:'row',borderBottomWidth:1,marginTop:90}}>
                <Feather name="arrow-left" size={29} onPress={()=>navigation.navigate('AgentDash')} style={{marginTop:-9,marginBottom:8,marginLeft:-60,marginRight:20}}/>
                <Text style={{marginLeft:20,fontWeight:'bold',fontSize:20,marginTop:-6}}>ASADU ROYAL WASTE</Text>
            </View>
            <MapView
            style={styles.mapStyle}
         provider={PROVIDER_GOOGLE}
         showsUserLocation
         initialRegion={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421}}
      />

       
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});