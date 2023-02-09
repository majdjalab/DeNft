import { View, Text, RefreshControl, ScrollView, StyleSheet, FlatList, Image  } from 'react-native'
import React, { useLayoutEffect, useState, useEffect, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import TopNav from '../components/TopNav'
import themeContext from "../config/themeContext"
import HomeScreenApi from '../APIs/HomeScreenApi'
const HomeScreen = () => {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  
  //Delete the title on the top of the screen 
  const navigation = useNavigation();
  useLayoutEffect(() => {
  navigation.setOptions({
      headerShown:false,
  });
  }, []);

  const theme = useContext(themeContext);
  const [isLoading, setLoading] = useState(true);
 


  return (
    <View style={ {backgroundColor:theme.background}}>
    <TopNav/>
    <Text style={[styles.titleStyle, {backgroundColor:theme.background}]}>Lead Stocks</Text>
    <ScrollView style={[styles.mainCategoryContainer, {backgroundColor:theme.background}]}
     refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <View style={ {backgroundColor:theme.background, marginBottom:'65%'}}>
    <HomeScreenApi />
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


export default HomeScreen