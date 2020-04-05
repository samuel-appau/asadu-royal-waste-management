import React from 'react'
import {Text,View,StyleSheet,TextInput,Button} from 'react-native'
import {Feather} from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'

export default function MemberScreen({navigation}){
    return(
        <View style={{flex:1,backgroundColor:"#c4ff4d"}}>
            <View style={{flexDirection:'row',borderBottomWidth:1,marginTop:29}}>
                <Feather name="arrow-left" size={29} onPress={()=>navigation.navigate('Dash')} style={{marginTop:-9,marginBottom:8}}/>
                <Text style={{marginLeft:20,fontWeight:'bold',fontSize:20,marginTop:-6}}>ASADU ROYAL WASTE</Text>
            </View>

           <ScrollView>
            <View style={{height:500,width:350,marginLeft:12,borderRadius:10,marginTop:29}}>
            <View style={{flexDirection:'row'}}>
                 <Text style={{marginTop:30}}>Name</Text>
                 <TextInput placeholder="JohnDoe" style={{marginLeft:50,height:30,marginTop:20,backgroundColor:'white',width:250,borderRadius:4}}/>
               </View>

               <View style={{flexDirection:'row'}}>
                 <Text style={{marginTop:30}}>Email</Text>
                 <TextInput placeholder="example@gmail.com" style={{marginLeft:50,height:30,marginTop:20,backgroundColor:'white',width:250,borderRadius:4}}/>
               </View>

               <View style={{flexDirection:'row'}}>
                 <Text style={{marginTop:30}}>Location</Text>
                 <TextInput placeholder="Taifa Burkina" style={{marginLeft:30,height:29,marginTop:20,backgroundColor:'white',width:250,borderRadius:4}}/>
               </View>

               <View style={{flexDirection:'row',marginTop:20}}>
                 <Text style={{marginTop:12}}>Telephone</Text>
                 <TextInput  placeholder="024657868" style={{marginLeft:20,height:29,backgroundColor:'white',width:250,borderRadius:4}} />
               </View>
               
               <View style={{flexDirection:'row',marginTop:20}}>
               <View style={{backgroundColor:"#00ccff"}}>
               <Button title='Submit' color='white'/>
               </View>
       
               <View style={{backgroundColor:'red',marginLeft:80}}>
               <Button title='Cancel' color='white'/>
               </View>
               </View>

               
           </View>
        </ScrollView>
        </View>
    )

}