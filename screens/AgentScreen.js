import React,{useState} from 'react'
import {Text,View,StyleSheet,ActivityIndicator,TextInput,Button,Switch,TouchableOpacity,Alert,Image,Platform}  from 'react-native'
import {firebase,firebaseDB} from '../firebase'



const handleLogin=(email,password,{navigation},setLoading)=>{
      let dataToSubmit={};
      for(let key in email){
        dataToSubmit[key]=email[key]
    }

    for(let key in password){
        dataToSubmit[key]=password[key]
    }
    setLoading(true)
     firebase.auth() 
             .signInWithEmailAndPassword(
                         dataToSubmit.email,
                         dataToSubmit.password
                                ).then(()=>{
                                 
                                    navigation.navigate('AgentDash')
                                }).catch(error=>{
                                    setLoading(false)
                                       Alert.alert(error.message)
                                })
                        }

        const   toggleRememberMe = (value,email,password,setRememberMe,{navigation}) => {
                            setRememberMe(value) 
                              if (value === true) {

                                let dataToSubmit={};
                                for(let key in email){
                                  dataToSubmit[key]=email[key]
                              }
                          
                              for(let key in password){
                                  dataToSubmit[key]=password[key]
                              }
                            
                               firebase.auth() 
                                       .signInWithEmailAndPassword(
                                                   dataToSubmit.email,
                                                   dataToSubmit.password
                                                          ).then(()=>{
                                                              navigation.navigate('AgentDash')
                                                          }).catch(error=>{
                                                                
                                                                 Alert.alert(error.message)
                                                          })
                                                  }
                            }
                         

export default function AgentScreen({navigation}){

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [Loading,setLoading]=useState(false)
    const [rememberMe,setRememberMe]=useState('')
    
if(Platform.OS==='android'){

    return(


        <View style={{flex:1,marginTop:-10}}>
        <Image  source={require('../assets/images/1.jpg')} style={{height:170,width:'100%',marginTop:40}}/> 
            <View  style={{borderRadius:10,marginTop:-20,backgroundColor:"#c0e81e",width:"95%",marginLeft:8,height:"60%"}}>
                <View style={{marginTop:33}}>  
               <TextInput 
               placeholder="Username"
               value={email}
               onChangeText={email=>setEmail({email})}
               
               style={{marginTop:30,marginBottom:20,backgroundColor:'white',height:50,width:"90%",marginBottom:-60,marginLeft:15,borderRadius:6}}
               />
               <TextInput
               autoCorrect={false}
               secureTextEntry={true}
               placeholder="Password"
               value={password}
               onChangeText={password=>setPassword({password})}
               style={{marginTop:100,backgroundColor:'white',height:50,marginBottom:-50,width:"90%",marginLeft:15,borderRadius:6}}
               />


               <View style={{flexDirection:'row',marginLeft:12,marginTop:75}}>
                 <Switch 
                 style={{ transform:[{ scaleX: .7 }, { scaleY: .7 }] }} 
                 value={rememberMe}
                 onValueChange={(value) =>toggleRememberMe(value,email,password,setRememberMe,{navigation})} />
                <Text style={{color:"white",fontWeight:"bold",fontSize:14,marginTop:8,marginLeft:-7}}>Remember Me</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Forget')}>
                <Text style={{marginLeft:39,color:"white",fontWeight:"bold",fontSize:14,marginTop:8}}>Forgot Password ? </Text>
                </TouchableOpacity>
                </View>

              
                   <Button  color="green"  title="Login" style={{marginTop:27,height:45,width:"90%",marginLeft:15,borderRadius:7}} onPress={()=>handleLogin(email,password,{navigation},setLoading)}/>
           
                 
               {Loading &&
                <View style={styles.activity}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            }
                

               </View>

            </View>
           
            <TouchableOpacity onPress={()=>navigation.navigate('Main')}>
                <Text style={{marginLeft:140,marginTop:9,textDecorationLine: 'underline',color:'red'}}>Go Back</Text>
            </TouchableOpacity>
        </View>
        
    )
}


return(


    
    <View style={{flex:1,marginTop:-10}}>
    <Image  source={require('../assets/images/1.jpg')} style={{height:150,width:'100%',marginTop:40}}/> 
        <View  style={{borderRadius:10,marginTop:-20,backgroundColor:"#c0e81e",width:"95%",marginLeft:8,height:"62%"}}>
    
            <View style={{marginTop:29}}>  
           <TextInput 
           placeholder="Username"
           value={email}
           onChangeText={email=>setEmail({email})}
           
           style={{marginTop:40,marginBottom:30,backgroundColor:'white',height:40,width:"90%",marginBottom:-60,marginLeft:15,borderRadius:6}}
           />
           <TextInput
           autoCorrect={false}
           secureTextEntry={true}
           placeholder="Password"
           value={password}
           onChangeText={password=>setPassword({password})}
           style={{marginTop:120,backgroundColor:'white',height:40,marginBottom:-50,width:"90%",marginLeft:15,borderRadius:6}}
           />


           <View style={{flexDirection:'row',marginLeft:12,marginTop:75}}>
             <Switch 
             style={{ transform:[{ scaleX: .7 }, { scaleY: .7 }] }} 
             value={rememberMe}
             onValueChange={(value) =>toggleRememberMe(value,email,password,setRememberMe,{navigation})} />
            <Text style={{color:"white",fontWeight:"bold",fontSize:14,marginTop:8,marginLeft:-7}}>Remember Me</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Forget')}>
            <Text style={{marginLeft:39,color:"white",fontWeight:"bold",fontSize:14,marginTop:8}}>Forgot Password ? </Text>
            </TouchableOpacity>
            </View>

           <View  style={{backgroundColor:"green",marginTop:27,height:40,width:"90%",marginLeft:15,borderRadius:7}}>
               <Button  color="white"  title="Login"   onPress={()=>handleLogin(email,password,{navigation},setLoading)}/>
           </View>
             
           {Loading &&
            <View style={styles.activity}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        }
            

           </View>

        </View>
       
        <TouchableOpacity onPress={()=>navigation.navigate('Main')}>
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
        top: 260,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
})