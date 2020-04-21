import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {Ionicons,FontAwesome,Feather} from '@expo/vector-icons'
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function AppAgent({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
      
      }}>
     
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      

      <View style={{flexDirection:'row',flex:4}}>
         <Feather name="arrow-left" color='white' size={29} onPress={()=>navigation.navigate('AgentDash')} style={{marginBottom:8,marginTop:10}}/>
      </View>

      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      
      
    </View>
  );
}