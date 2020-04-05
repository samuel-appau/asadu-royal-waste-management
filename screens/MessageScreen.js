import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Platform,Button,TextInput, Alert
} from "react-native";
import {Ionicons,AntDesign, Feather} from '@expo/vector-icons'
import KeyboardSpacer from "react-native-keyboard-spacer";
import RNDraftView from "react-native-draftjs-editor";
import {firebase,firebaseDB} from '../firebase'
 
const ControlButton = ({ text, action, isActive }) => {
  return (
    <TouchableOpacity
      style={[
        styles.controlButtonContainer,
        isActive ? { backgroundColor: "gold" } : {}
      ]}
      onPress={action}
      
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
 
const EditorToolBar = ({
  activeStyles,
  blockType,
  toggleStyle,
  toggleBlockType
}) => {
  return (
    <View style={styles.toolbarContainer}>
      <ControlButton
        text={"B"}
        isActive={activeStyles.includes("BOLD")}
        action={() => toggleStyle("BOLD")}
      />
      <ControlButton
        text={"I"}
        isActive={activeStyles.includes("ITALIC")}
        action={() => toggleStyle("ITALIC")}
      />
      <ControlButton
        text={"H"}
        isActive={blockType === "header-one"}
        action={() => toggleBlockType("header-one")}
      />
      <ControlButton
        text={"ul"}
        isActive={blockType === "unordered-list-item"}
        action={() => toggleBlockType("unordered-list-item")}
      />
      <ControlButton
        text={"ol"}
        isActive={blockType === "ordered-list-item"}
        action={() => toggleBlockType("ordered-list-item")}
      />
      <ControlButton
        text={"--"}
        isActive={activeStyles.includes("STRIKETHROUGH")}
        action={() => toggleStyle("STRIKETHROUGH")}
      />
    </View>
  );
};
 
const styleMap = {
  STRIKETHROUGH: {
    textDecoration: "line-through"
  }
};
 
const MessageScreen= ({navigation}) => {
  const _draftRef = React.createRef();
  const [activeStyles, setActiveStyles] = useState([]);
  const [blockType, setActiveBlockType] = useState("unstyled");
  const [editorState, setEditorState] = useState("");
  const [Text,setText]=useState('')
  const [email,setEmail]=useState('')
 
  const defaultValue =
    "<h1>A Full fledged Text Editor</h1><p>This editor is built with Draft.js. Hence should be suitable for most projects. However, Draft.js Isn’t fully compatible with mobile yet. So you might face some issues.</p><p><br></p><p>This is a simple implementation</p><ul>  <li>It contains <strong>Text formatting </strong>and <em>Some blocks formatting</em></li>  <li>Each for it’s own purpose</li></ul><p>You can also do</p><ol>  <li>Custom style map</li>  <li>Own css styles</li>  <li>Custom block styling</li></ol><p>You are welcome to try it!</p>";
 
  const editorLoaded = () => {
    _draftRef.current && _draftRef.current.focus();
  };
 
  const toggleStyle = style => {
    _draftRef.current && _draftRef.current.setStyle(style);
  };
 
  const toggleBlockType = blockType => {
    _draftRef.current && _draftRef.current.setBlockType(blockType);
  };
 
  useEffect(() => {
    /**
     * Get the current editor state in HTML.
     * Usually keep it in the submit or next action to get output after user has typed.
     */
    setEditorState(_draftRef.current ? _draftRef.current.getEditorState() : "");
  }, [_draftRef]);

  const handleSubmit=(email,Text)=>{
  
    let dataToSubmit={
      email,
      Text

    }
  
    firebaseDB.ref('Messages').push(dataToSubmit)
        .then(()=>{
              Alert.alert("Message sent succccssfully")
                 
        })
        .catch(error=>
          Alert.alert(error.message)

        )

  }
  
  return (
    <View  style={{flex:1}}>
      <View style={{borderBottomWidth:1,borderBottomColor:'ash',marginTop:40,flexDirection:'row'}}>
        <Feather name="arrow-left" size={29} onPress={()=>navigation.navigate('Dash')} style={{marginTop:-9,marginBottom:8}}/>
      </View>
    <SafeAreaView style={styles.containerStyle}>
      <RNDraftView
        value={Text}
        onChangeText={Text=>setText({Text})}
        onEditorReady={editorLoaded}
        style={{ flex: 1 }}
        placeholder={"Add text here..."}
        ref={_draftRef}
        onStyleChanged={setActiveStyles}
        onBlockTypeChanged={setActiveBlockType}
        styleMap={styleMap}
        
      />
      <View style={{borderRadius:5,borderColor:'black'}}>
    <TextInput placeholder="Enter  your email" value={email}  onChangeText={email=>setEmail({email})} style={{marginTop:10,marginBottom:20,backgroundColor:'white',height:24,width:"90%",marginLeft:15,borderRadius:5,borderColor:'black'}}/>
    <View style={{backgroundColor:"#00ccff"}}>
    <Button title="Send" color="white" style={{width:40,height:40}} onPress={()=>handleSubmit(email,Text) }/>
    </View>
    </View>
      <EditorToolBar
        activeStyles={activeStyles}
        blockType={blockType}
        toggleStyle={toggleStyle}
        toggleBlockType={toggleBlockType}
      />
      {Platform.OS === "ios" ? <KeyboardSpacer /> : null}
    </SafeAreaView>


   
  
    </View>
  );
};
 
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    marginTop:10
  },
  toolbarContainer: {
    height: 56,
    flexDirection: "row",
    backgroundColor: "silver",
    alignItems: "center",
    justifyContent: "space-around"
  },
  controlButtonContainer: {
    padding: 8,
    borderRadius: 2
  }
});
 
export default MessageScreen;