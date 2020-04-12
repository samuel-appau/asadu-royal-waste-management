import React from 'react'
import {View,Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native'
import MenuButton from '../components/Menubar';
import {Ionicons,FontAwesome,Feather,AntDesign} from '@expo/vector-icons'



export default function AgentDashboard({navigation}){
    return(
        <View style={{flex:1}}>
        
          <View   style={{flexDirection:"row",borderBottomColor:"ash",borderBottomWidth:1,marginTop:35,backgroundColor:"ash"}}>
          <View style={{flex:4}}>
                 <MenuButton navigation={navigation} />
                 <TouchableOpacity onPress={()=>navigation.navigate('menu')}>
                     <Text>Menu </Text>
                 </TouchableOpacity>
                
          </View>
          <View style={{flex:12}}>
          <Text style={{fontWeight:'bold',fontSize:22,marginLeft:-9}}>ASADU MOBILE APP</Text>
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
            
           <View style={{flexDirection:'row',marginTop:10}}>
               
            <View style={styles.container} >
                  <AntDesign name="scan1" size={120}  color='gold'  onPress={()=>navigation.navigate('camera1')} />
                 <TouchableOpacity onPress={()=>navigation.navigate('camera1')}>
                     <Text style={{fontWeight:'bold',fontSize:12}}>QR-CODE SCANNER</Text>
                 </TouchableOpacity>
            </View>
        
                <View style={styles.container}>
                  <FontAwesome name="money" size={142} color='black' style={{marginTop:-12}}  />
                  <TouchableOpacity >
                     <Text style={{fontWeight:'bold',fontSize:12}}>MAKE-PAYMENT</Text>
                 </TouchableOpacity>
            </View>
            </View>

            <View style={{flexDirection:'row'}}>
            <View style={styles.container}>
                <Feather name="message-square"  size={120} color="green"/>
                <TouchableOpacity  onPress={()=>navigation.navigate('Message')}>
                     <Text style={{fontWeight:'bold',fontSize:12}}>SEND MESSAGE</Text>
                 </TouchableOpacity>
            </View>


            <View style={styles.container}>
            <Feather name="map-pin"  size={110} color="blue"/>
                <TouchableOpacity onPress={()=>navigation.navigate('map1')}>
                     <Text style={{fontWeight:'bold',fontSize:12}}>LOCATION</Text>
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
        height:200,
        width:"48%",
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
        marginRight:2,
        marginLeft:5,
        marginTop:40
        
        
    }
 
    


});