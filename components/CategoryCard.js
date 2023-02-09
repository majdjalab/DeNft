import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native'
import React, { useContext } from 'react'
import themeContext from "../config/themeContext"
import { useNavigation } from "@react-navigation/native"

const CategoryCard = ({imgUrl, title, NavTo}) => {

  const navigation = useNavigation(); 
  const theme = useContext(themeContext);
  return (
    <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate(NavTo)}>
      <Image source={{
        uri:imgUrl
      }}
      style={styles.categoryImage}/>
      <View style={[styles.categoryTitle, {backgroundColor:theme.card}]} >
      <Text style={styles.titleStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create(
  {
    touchableContainer:{
      marginBottom:'20%',
      height:180,
      width:'40%',
      marginLeft: '5%',
      marginRight:'1%',
      padding:'1%',
      justifyContent:'center',
      alignContent:'center',
      alignContent:'center'
    },
    categoryImage:{
      width:'100%',
      height:'100%',
      borderRadius:10,
    },
    categoryTitle:{
      width:'100%',
      height: 48,
      borderRadius:10,
      marginTop:4,
    },
    titleStyle:{
      marginBottom:'2%',
      marginTop:'4%',
      textAlign:'center',
      color:'#F4D03F',
      fontSize:20,
    }
  }
);


export default CategoryCard