import React,{useState} from 'react'
import {Text,View,StyleSheet,Image,ActivityIndicator,TextInput,Button,Switch,TouchableOpacity, Alert}  from 'react-native'
import {firebase} from '../firebase'



const handleSignUp=(email,password,{navigation},setLoading)=>{
    
    // if(email){
    //     const valid=/\S+@\S+\.\S+/.test(email);
    //     const message=`${!valid ? alert('Must be a valid email'):''}`;
    //    const error=!valid ? [valid,message] :error

    // }

    // if(password){
    //     const valid=password.length >= 5;
    //     const message=`${!valid ? alert('Must be greater than 5 characters'):''}`;
    //     const error=!valid ? [valid,message] :error

    // }
    

    let dataToSubmit={};
      for(let key in email){
        dataToSubmit[key]=email[key]
    }

    for(let key in password){
        dataToSubmit[key]=password[key]
    }

 
    setLoading(true)
     firebase.auth() 
             .createUserWithEmailAndPassword(
                         dataToSubmit.email,
                         dataToSubmit.password
                                ).then(()=>{
                                    navigation.navigate('Client')
                                }).catch(error=>{
                                   setLoading(false)
                                   Alert.alert(error.message)
                                })
                        }


export default function RegisterScreen({navigation}){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const [validation,setValidation]=useState('')
    const [Loading,setLoading]=useState(false)

    
    return(
        <View style={{flex:1}}>
        <Image  source={require('../assets/images/1.jpg')} style={{height:150,width:'100%',marginTop:40}}/>
            <View  style={{borderRadius:10,marginTop:-30,backgroundColor:'black',width:"95%",marginLeft:8,height:"62%"}}>
         
                <View style={{marginTop:54}}>
              
               <TextInput 
               placeholder="Username"
               value={email}
               onChangeText={email=>setEmail({email})}
               style={{marginTop:20,marginBottom:20,backgroundColor:'white',height:47,width:"90%",marginBottom:-60,marginLeft:15,borderRadius:6}}
               />
               <TextInput
               placeholder="Password"
               secureTextEntry={true}
               style={{marginTop:110,backgroundColor:'white',height:47,marginBottom:-50,width:"90%",marginLeft:15,borderRadius:6}}
               value={password}
               onChangeText={password=>setPassword({password})}
               />

               <View  style={{backgroundColor:"red",marginTop:100,height:45,width:"90%",marginLeft:15,borderRadius:8}}>
                   <Button  color="white"  title="Register"  type="submit" onPress={()=>handleSignUp(email,password,{navigation},setLoading)}/>
               </View>
                       
               {Loading &&
                <View style={styles.activity}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            }
               </View>

            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Client')}>
                <Text style={{marginLeft:140,marginTop:9,textDecorationLine: 'underline',color:'red'}}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles=StyleSheet.create({
    activity: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 210,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
})