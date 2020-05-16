import React from 'react'
import {Text,View,StyleSheet,ActivityIndicator,TextInput,Button,Switch,TouchableOpacity,Alert,Image}  from 'react-native'
import {Ionicons} from '@expo/vector-icons'



export default function EntryApp({navigation}){
    return(

        <View style={{flex:1}}>
        <Image  source={require('../assets/images/Asa.jpg')} style={{height:'100%',width:'100%'}}/>

     
           <View style={{marginTop:-200}}>
            <View style={{backgroundColor:'#1aff1a',height:45,width:'97%',marginLeft:6}}>
                <Button title="LOG IN AS AN AGENT" color='white' style={{marginTop:15}}  onPress={()=>navigation.navigate('Agent')}/>
                    
                
            </View>
             
        

            <View style={{backgroundColor:'#3399ff',marginTop:29,height:45,width:'97%',marginLeft:6}}>
                <Button title="LOG IN AS A CLIENT" color='white'  style={{marginTop:15}}  onPress={()=>navigation.navigate('Client')}/>
                
            </View>
            

            <Text style={{marginTop:-540,fontWeight:'bold',fontSize:29,marginLeft:20,color:'white'}}>ASADU  ROYAL  WASTE</Text>
            
            
            </View>
    
           
        </View>
    )
}