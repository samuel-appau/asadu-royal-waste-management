import React,{useState} from 'react'
import {View,Text,StyleSheet,TextInput,Picker,Button,Platform} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {firebase} from '../firebase'


const handlePayment=(name,phone,search,amount)=>{
  
  let dataToSubmit={
 name,
 phone,
  search,
  amount
  }
 
  firebaseDB.ref('PaymentDetails').push(dataToSubmit)
  .then(()=>{
        Alert.alert("Payment has been sent ")
       
           
  })
  .catch(error=>{
    
    Alert.alert(error.message)

  })

}

export default function PaymentScreen({navigation}){
    const [search,setsearch]=useState('')
    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')
    const [amount,setAmount]=useState('')

     const providers=[
   'MTN-MOMO',
  'VODA-CASH',
  'MicroCredits',
   'Bank'
]


if(Platform.OS==='android'){
    return(
      <View style={{flex:1}}>
         <View   style={{flexDirection:"row",borderBottomColor:"ash",borderBottomWidth:1,marginTop:35,backgroundColor:"ash"}}>
          <View style={{flex:4}}>
          <Feather name="arrow-left" size={29} onPress={()=>navigation.navigate('Agent')} style={{marginTop:-4,marginBottom:8,marginLeft:5}}/>
                
          </View>
          <View style={{flex:12}}>
          <Text style={{fontWeight:'bold',fontSize:22,marginLeft:-9}}>ASADU MOBILE APP</Text>
          </View>
   </View>
      <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:'row',marginTop:20}}>
          <View style={{backgroundColor:'green',height:40,width:70}}>
          <Text style={{color:'white',marginTop:10,fontWeight:'bold'}}>Full Name</Text>
             </View>
      <TextInput 
         placeholder='Enter your name'
         value={name}
         onChangeText={name=>setName({name})}
         style={{backgroundColor:'white',height:40,width:"80%",borderRadius:2,borderColor:'#12e607'}}
         />
         </View>
         

         <View style={{flexDirection:'row',marginTop:20}}>
          <View style={{backgroundColor:'green',height:40,width:70}}>
          <Text style={{color:'white',marginTop:10,fontWeight:'bold',marginLeft:8}}>Phone</Text>
             </View>
      <TextInput 
         placeholder='Enter your phone'
         value={phone}
         onChangeText={phone=>setPhone({phone})}
         style={{backgroundColor:'white',height:40,width:"80%",borderRadius:2,borderColor:'#12e607'}}
         />
         </View>

   

    

      </View>


      <View style={{margin: 10}}>

    <Picker

      style={{  borderWidth: 1,

borderColor: '#fff',

borderRadius: 2,

paddingHorizontal: 10,

paddingVertical: 5,

marginVertical: 10,

backgroundColor: '#eee',

fontSize: 16,

color: 'gray',

shadowColor: '#000',

shadowOffset: {

width: 0,

height: 2,

},}}

      onValueChange={(itemValue, itemIndex) => {

        setsearch(itemValue);

      }}

      selectedValue={search}

    >

      <Picker.Item value="" label="Select a Service Provider" />

      {providers.map((provider) => {

        return (

          <Picker.Item label={provider} value={provider} key={provider} />

        );

      })}

    </Picker>
    </View>
     
    <View style={{flexDirection:'row',marginTop:20}}>
          <View style={{backgroundColor:'green',height:40,width:70}}>
          <Text style={{color:'white',marginTop:10,fontWeight:'bold',marginLeft:8}}>Amount</Text>
             </View>
      <TextInput 
         placeholder='Enter  Amount to Pay'
         value={amount}
         onChangeText={amount=>setAmount({amount})}
         style={{backgroundColor:'white',height:40,width:"80%",borderRadius:2,borderColor:'#12e607'}}
         />
         </View>

   
              <Button color='blue' title="Proceed" onPress={()=>handlePayment(name,phone,search,amount)} style={{width:'75%',width:'90%',height:47,marginTop:60}}/>
         
  </View>
    )
}

return(
  <View style={{flex:1}}>
    
    <View   style={{flexDirection:"row",borderBottomColor:"ash",borderBottomWidth:1,marginTop:35,backgroundColor:"ash"}}>
          <View style={{flex:4}}>
          <Feather name="arrow-left" size={29} onPress={()=>navigation.navigate('Agent')} style={{marginTop:-4,marginBottom:8,marginLeft:5}}/>
                
          </View>
          <View style={{flex:12}}>
          <Text style={{fontWeight:'bold',fontSize:22,marginLeft:-9}}>ASADU MOBILE APP</Text>
          </View>
   </View>
  <View style={{flexDirection:'row'}}>
  <View style={{flexDirection:'row',marginTop:20}}>
      <View style={{backgroundColor:'green',height:40,width:70}}>
      <Text style={{color:'white',marginTop:10,fontWeight:'bold'}}>Full Name</Text>
         </View>
  <TextInput 
     placeholder='Enter your name'
     value={name}
     onChangeText={name=>setName({name})}
     style={{backgroundColor:'white',height:40,width:"80%",borderRadius:2,borderColor:'#12e607'}}
     />
     </View>
     

     <View style={{flexDirection:'row',marginTop:20}}>
      <View style={{backgroundColor:'green',height:40,width:70}}>
      <Text style={{color:'white',marginTop:10,fontWeight:'bold',marginLeft:8}}>Phone</Text>
         </View>
  <TextInput 
     placeholder='Enter your phone'
     value={phone}
     onChangeText={phone=>setPhone({phone})}
     style={{backgroundColor:'white',height:40,width:"80%",borderRadius:2,borderColor:'#12e607'}}
     />
     </View>





  </View>


  <View style={{margin: 10}}>

<Picker

  style={{  borderWidth: 1,

borderColor: '#fff',

borderRadius: 2,

paddingHorizontal: 10,

paddingVertical: 5,

marginVertical: 10,

backgroundColor: '#eee',

fontSize: 16,

color: 'gray',

shadowColor: '#000',

shadowOffset: {

width: 0,

height: 2,

},}}

  onValueChange={(itemValue, itemIndex) => {

    setsearch(itemValue);

  }}

  selectedValue={search}

>

  <Picker.Item value="" label="Select a Service Provider" />

  {providers.map((provider) => {

    return (

      <Picker.Item label={provider} value={provider} key={provider} />

    );

  })}

</Picker>
</View>
 
<View style={{flexDirection:'row',marginTop:20}}>
      <View style={{backgroundColor:'green',height:40,width:70}}>
      <Text style={{color:'white',marginTop:10,fontWeight:'bold',marginLeft:8}}>Amount</Text>
         </View>
  <TextInput 
     placeholder='Enter  Amount to Pay'
     value={amount}
     onChangeText={amount=>setAmount({amount})}
     style={{backgroundColor:'white',height:40,width:"80%",borderRadius:2,borderColor:'#12e607'}}
     />
     </View>




      <View style={{backgroundColor:'green',width:'90%',height:47,marginTop:50}}>
  
          <Button color='blue' title="Proceed"  onPress={()=>handlePayment(name,phone,search,amount)} style={{width:'75%',marginTop:15}}/>
      </View>
</View>

)

}