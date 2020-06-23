import React,{Component} from 'react';
import {firebaseDB} from '../firebase'
import {View,Text,Button,StyleSheet,FlatList} from 'react-native'
import {Feather} from '@expo/vector-icons'

export default class NotificationScreen extends Component{
  state={
         students:''
  }

  componentDidMount(){
    
    firebaseDB.ref('PaymentDetails').once('value')
    .then(snapshot=>{
      const students=[]
  
      snapshot.forEach(childSnapshot=>{
        const data=childSnapshot.val()
        students.push(data)
      })
      this.setState({students:students})

    })
    .catch(error=>console.log(error))
  }

  render(){
    return(
      <View style={{flex:1}}>
        <View style={{flexDirection:'row',borderBottomWidth:1,marginTop:30}}>
                <Feather name="arrow-left" size={29} onPress={()=>this.props.navigation.navigate('Dash')} style={{marginTop:-9,marginBottom:8,marginRight:20}}/>
                <Text style={{marginLeft:20,fontWeight:'bold',fontSize:20,marginTop:-6}}>ASADU ROYAL WASTE</Text>
            </View>
        <FlatList
          data={this.state.students}
          numColumns="2"
          renderItem={({ item }) =>
          ( <View style={{borderBottomWidth:1,borderColor:"blue", justifyContent:'space-between',marginVertical:10,paddingHorizontal:20,display:"flex",alignItems:'center'}}>
              <View style={{flexDirection:'column'}}>
                <Text style={{fontSize:8,fontWeight:'bold'}}>
                      {item.phone.phone}
                </Text>
             
               <View>
                   <Text style={{fontSize:6,fontSize:15,marginLeft:12,fontWeight:'bold'}}>
                        An amount of {item.amount.amount} has been paid by {item.name.name}
                    </Text>
                </View>
                </View>
            </View>
         
            )
          }
        
        />

      </View>
      
    )
  }
}





NotificationScreen.navigationOptions = {
  title: 'NotificationScreen',
};
