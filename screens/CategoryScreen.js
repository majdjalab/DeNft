import { ScrollView, View, StyleSheet, Text } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { useNavigation, } from '@react-navigation/native'
import TopNav from '../components/TopNav'
import Categories from '../components/Categories'
import themeContext from "../config/themeContext"




const CategoryScreen = () => {

  const theme = useContext(themeContext);

  //Delete the title on the top of the screen 
  const navigation = useNavigation();
  useLayoutEffect(() => {
  navigation.setOptions({
      headerShown:false,
  });
  }, []);

  return (
    <View style={ {backgroundColor:theme.background}}>
      <TopNav/>
      <Text style={[styles.titleStyle, {backgroundColor:theme.background}]}>Kategorie</Text>
      <ScrollView style={[styles.mainCategoryContainer, {backgroundColor:theme.background}]}>
        <View style={ {backgroundColor:theme.background, marginBottom:'65%'}}>
      <Categories />
      </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    mainCategoryContainer:{
      height:'100%',
      alignContent:'center',
      alignSelf:'center',
    },
    titleStyle:{
      color:'#F4D03F',
      fontSize:24,
      lineHeight:32,
      fontWeight:'bold',
      marginLeft:'6%'
    },
  }
);

export default CategoryScreen