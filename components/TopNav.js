import React, { useContext, useState, } from "react"
import { View, TextInput, StyleSheet, Text} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import SwitchWithIcons from "react-native-switch-with-icons"
import themeContext from "../config/themeContext"
import { EventRegister } from "react-native-event-listeners"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"



const TopNav = ({backIcon}) => {
  const theme = useContext(themeContext);
  const [mode, setMode] = useState(false);
  const navigation = useNavigation(); 

  return (
    <SafeAreaView style={ {backgroundColor:theme.background}}>
    <View style={[styles.mainTopContainer, {backgroundColor:theme.background}]}>

    <Icon onPress={() => navigation.navigate("BottomNav")} style={[styles.backIcon, {color:theme.borders}]} name={backIcon} size={28}/>
    <Text style={styles.appName}>DeNft</Text>
    <SwitchWithIcons 
        value={mode}
        onValueChange={(value) => {
        setMode(value)
        EventRegister.emit("changeTheme", value);
        }}
        style={styles.switchMode}/>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(
  {
    mainTopContainer:{
      flexDirection: 'row', 
      justifyContent: 'center', 
      alignItems:'center',
      borderBottomWidth:1,
      borderBottomColor:'#F4D03F',
    },
    switchMode:{
      marginLeft:'25%',
      marginTop:'2%',
      marginBottom:'2%'
    },
    appName:{
      marginLeft:'25%',
      marginTop:'2%',
      marginBottom:'2%',
      color:'#F4D03F',
      fontSize:30,
      fontWeight:'bold'
    }
  }
);

export default TopNav