import React,{Component} from 'react'
import {StyleSheet,Dimensions,Platform, View,Text,TouchableOpacity, Button,Image}  from 'react-native'



const WIDTH=Dimensions.get('window').width;

const HEIGHT=Dimensions.get('window').height;

export default class MenuDrawer extends  Component{ 

    navLink(nav,text){
        return(
            <TouchableOpacity  style={{height:80,borderBottomColor:'black',borderBottomWidth:1 }} onPress={()=>this.props.navigation.navigate(nav)}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }
render(){
    return(
     <View  style={styles.container}>
        <View  style={styles.topLink}>
           {/* <Image  source={require('../assets/images/logo.jpg')}   style={{borderRadius:42,height:89,width:89,marginTop:34}}  /> */}
           <Text style={{paddingTop:40,color:"white",marginTop:34,fontSize:25,fontWeight:'bold'}}>ASADU CLIENT APP</Text>
        </View>
        <View  style={styles.BottomLink}>
        {this.navLink('home','home')}
        {this.navLink('Message','Message')}
        {this.navLink('Logout','Logout')}
        
        </View>

        <View style={{height:80,marginTopWidth:1,borderWidthColor:'black',backgroundColor:'black' }}>
             

        </View>
    
    </View>
    )
}
   

}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#654'
    },
    topLink:{
        height:140,
        backgroundColor:"#000",
        flexDirection:'row',
        

    },
    BottomLink:{
        flex:1,
        backgroundColor:'#fff',
        padding:10,
        paddingBottom:450,
        borderBottomWidth:1,
        borderBottomColor:'black'

    },
    link:{
        flex:1,
        fontSize:18,
        padding:10,
        margin:5,
        textAlign:'left'
    }
})