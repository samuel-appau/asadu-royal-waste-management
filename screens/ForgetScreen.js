import React,{useState} from 'react'
import {Text,View,StyleSheet,ActivityIndicator,TextInput,Button,Switch,TouchableOpacity, Alert,Image,Platform}  from 'react-native'
import {firebase} from '../firebase'



const handleForget=(email,setLoading)=>{
    
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

    setLoading(true)
   
                       
                            firebase.auth().sendPasswordResetEmail(
                                dataToSubmit.email)
                              .then(()=>{
                                    setLoading(false)
                                    Alert.alert('Please check your email...')
                              }).catch(error=>{
                                setLoading(false)
                                Alert.alert(error.message)
                          })

                        }

export default function ForgetScreen(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const [validation,setValidation]=useState('')
    const [Loading,setLoading]=useState(false)
  

   
    if(Platform.OS=='android'){
    
    return(
        <View style={{flex:1}}>
        <View  style={{borderRadius:10,marginTop:190,backgroundColor:'black',width:"95%",marginLeft:8,height:"45%"}}>
        <Image  source={require('../assets/images/1.jpg')} style={{borderRadius:40,height:80,width:80,marginTop:-50,marginLeft:130,borderColor:'green',borderWidth:1}}/>
            <View style={{marginTop:54}}>
          
           <TextInput 
           placeholder="Enter your Email"
           value={email} 
           onChangeText={email=>setEmail({email})}
           style={{marginTop:10,marginBottom:20,backgroundColor:'white',height:40,width:"90%",marginBottom:-60,marginLeft:15,borderRadius:6}}
           />
           
       
           <View style={{marginTop:110,height:40,width:"90%",marginLeft:15,borderRadius:8}} onPress={()=>handleForget(email,setLoading)}> 
         <Button  color="Blue"  title="Reset Password" />
         </View>
                   
           {Loading &&
            <View style={styles.activity}>
                <ActivityIndicator size="large" color="red" />
            </View>
        }
           </View>

        </View>
        
    </View>
)
}

return(
    <View style={{flex:1}}>
    <View  style={{borderRadius:10,marginTop:190,backgroundColor:'black',width:"95%",marginLeft:8,height:"45%"}}>
    <Image  source={require('../assets/images/1.jpg')} style={{borderRadius:40,height:80,width:80,marginTop:-50,marginLeft:130,borderColor:'green',borderWidth:1}}/>
        <View style={{marginTop:54}}>
      
       <TextInput 
       placeholder="Enter your Email"
       value={email} 
       onChangeText={email=>setEmail({email})}
       style={{marginTop:10,marginBottom:20,backgroundColor:'white',height:40,width:"90%",marginBottom:-60,marginLeft:15,borderRadius:6}}
       />
       

       <View  style={{backgroundColor:"blue",marginTop:110,height:40,width:"90%",marginLeft:15,borderRadius:8}}>
           <Button  color="white"  title="Reset Password"  type="submit" onPress={()=>handleForget(email,setLoading)}/>
       </View>
               
       {Loading &&
        <View style={styles.activity}>
            <ActivityIndicator size="large" color="red" />
        </View>
    }
       </View>

    </View>
    
</View>
)

}


const styles=StyleSheet.create({
    activity: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 112,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

