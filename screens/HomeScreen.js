

import React from 'react';
import {
  StyleSheet,
  Text,
  View, Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: "#f3f3f3", flexDirection: 'column', flex: 1 }}>
      <View>
        <Text style={{ fontSize: 25, paddingHorizontal: 15, paddingVertical: 5 }}>Settings</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: "white", elevation: 1 }}>
        <View style={{ height: 100, flex: 4, justifyContent: "center", alignItems: "center" }}>
          <Image source={require('../assets/images/img2.jpg')} style={{ width: 80, height: 80, borderRadius: 100 }} />
        </View>
        <View style={{ height: 100, flex: 8, justifyContent: 'center' }}>
          <Text style={{ fontSize: 20 }}>Appau Samuel</Text>
          <Text style={{ fontSize: 12, opacity: 0.5 }}>Apple ID, iCloud, iTunes & App Store</Text>
        </View>
        <View style={{ height: 100, alignSelf: "flex-end", justifyContent: "center", marginRight: 10 }}>
          <Ionicons name='ios-arrow-forward' size={24} />
        </View>
      </View>
      <View style={{ backgroundColor: "white", marginTop: 15, paddingVertical: 10, flexDirection: "row", alignItems: 'center', elevation: 1 }}>
        <Text style={{ marginLeft: 15, flex: 1 }}>Finish setting up your iPhone</Text>
        <View style={{ backgroundColor: "red", marginHorizontal: 5, borderRadius: 10, width: 20, height: 20, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ color: "white" }}>1</Text>
        </View>
        <View style={{ alignSelf: "flex-end", marginRight: 10 }}>
          <Ionicons name='ios-arrow-forward' size={24} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pic: {
    borderRadius: 20,
    borderColor: '#000'
  }
});

