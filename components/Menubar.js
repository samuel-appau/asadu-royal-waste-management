import React,{Component} from 'react'
import {StyleSheet }  from 'react-native'
import {Ionicons} from '@expo/vector-icons';



export default class MenuButton extends Component{
    render(){
        
        return(
          
            <Ionicons  
               name="md-menu"
               color="#000"
               size={32}
               style={styles.menuicon}
               onPress={()=>this.props.navigation.toggleDrawer()}
               
            />
            
        )
    }
}


const styles=StyleSheet.create({
    menuicon:{
        zIndex:9,
        position:'absolute',
        top:-2,
        left:15,
        
    }
})
