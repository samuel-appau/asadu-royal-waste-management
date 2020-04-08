import React from 'react'
import {View,Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native'
import MenuButton from '../components/Menubar';
import {Ionicons,FontAwesome,Feather} from '@expo/vector-icons'



export default function DashboardScreen({navigation}){
    return(
        <View style={{flex:1}}>
        
          <View   style={{flexDirection:"row",borderBottomColor:"ash",borderBottomWidth:1,marginTop:35,backgroundColor:"ash"}}>
          <View style={{flex:4}}>
                 <MenuButton navigation={navigation} />
                
          </View>
          <View style={{flex:12}}>
          <Text style={{fontWeight:'bold',fontSize:22,marginLeft:-9}}>ASADU CLIENT APP</Text>
          </View>
          <View style={{flex:3,flexDirection:'row',marginLeft:30}}>
              <Ionicons 
              name="ios-notifications-outline"
              size={28}
              style={{marginRight:-10}}/>

              <View style={{backgroundColor:'red',borderRadius:40,width:16,height:16,marginLeft:2}}>
                  <Text style={{color:'white',marginLeft:3.3,marginTop:-0.9,fontWeight:'bold'}}>0</Text>
              </View>

          </View>
          </View>
            
            <ScrollView>
            
           <View style={{flexDirection:'row'}}>
               
            <View style={styles.container} >
                  <FontAwesome name="qrcode" size={110}  color='gold'  />
                 <TouchableOpacity onPress={()=>navigation.navigate('camera')}>
                     <Text style={{fontWeight:'bold',fontSize:12}}>QR-CODE SCANNER</Text>
                 </TouchableOpacity>
            </View>
        
                <View style={styles.container}>
                  <FontAwesome name="money" size={122} color='black' style={{marginTop:-12}}  />
                  <TouchableOpacity >
                     <Text style={{fontWeight:'bold',fontSize:12}}>MAKE-PAYMENT</Text>
                 </TouchableOpacity>
            </View>
            </View>

            <View style={{flexDirection:'row'}}>
            <View style={styles.container}>
                <Feather name="message-square"  size={110} color="green"/>
                <TouchableOpacity  onPress={()=>navigation.navigate('Message')}>
                     <Text style={{fontWeight:'bold',fontSize:12}}>SEND MESSAGE</Text>
                 </TouchableOpacity>
            </View>
            <View style={styles.container}>
                    <Ionicons  name="ios-notifications-outline" size={110} color="red" style={{marginTop:-12}}/>
                    <TouchableOpacity >
                     <Text style={{fontWeight:'bold',fontSize:12,textAlign:'center',marginTop:-5}}>VIEW NOTIFICATIONS</Text>
                 </TouchableOpacity>
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={styles.container}>
            <Feather name="map-pin"  size={90} color="blue"/>
                <TouchableOpacity onPress={()=>navigation.navigate('map')}>
                     <Text style={{fontWeight:'bold',fontSize:12}}>LOCATION</Text>
                 </TouchableOpacity>
            </View>
            <View style={styles.container}>
            <Feather name="user"  size={90} color="black"/>
                <TouchableOpacity onPress={()=>navigation.navigate('member')} >
                     <Text style={{fontWeight:'bold',fontSize:12}}>MEMBER</Text>
                 </TouchableOpacity>
            </View>
            </View>
            </ScrollView>
       
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        borderWidth:2,
        padding:10,
        height:170,
        width:"45%",
        borderRadius:10, 
        marginVertical:10,
        alignItems:'center',
        justifyContent:'space-between',
        shadowColor:'black',
        shadowOffset:{width:0 ,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        backgroundColor:'white',
        padding:20,
        borderRadius:10,
        marginRight:12,
        marginLeft:10,
        marginTop:20
        
        
    }
 
    


});