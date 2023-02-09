import { View, Text, TouchableOpacity, Image, StyleSheet, Linking } from 'react-native'
import React, { useContext, useState, } from "react"
import themeContext from "../config/themeContext"

const SiteCard = ({imgUrl, title, link}) => {

  const theme = useContext(themeContext);

  return (
    <TouchableOpacity
    style={[styles.container, {borderColor:theme.borders}]}
    onPress={() => {Linking.openURL(link);}}>
      <Image source={{uri:imgUrl}} style={styles.imageCard}/>
      <View>
      <Text  style={[styles.cardTitle, {color:theme.borders}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create(
  {
    
    container:{
      height:208,
      width:155,
      marginLeft:20,
      borderWidth:1,
      borderRadius:40,
      alignItems:'center',
    },
    imageCard:{
      height:80,
      width:120,
      marginTop:24,
      borderRadius:10
    },
    cardTitle:{
      marginBottom:'2%',
      marginTop:'4%',
      fontSize:20,
      lineHeight:28
    }
  }
);

export default SiteCard