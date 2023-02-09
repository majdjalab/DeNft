import { View, Text, ScrollView, StyleSheet, RefreshControl  } from 'react-native'
import React, { useLayoutEffect, useState, useEffect, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import TopNav from '../components/TopNav'
import themeContext from "../config/themeContext"
import NewsStockApi from '../APIs/NewsStockApi'
import Sites from '../components/Sites'





const ChartScreen = () => {


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

  return (
    <View style={[styles.container, {backgroundColor:theme.background}]}>
      <TopNav/>
    <ScrollView  refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
    <Text style={styles.titleStyle}>Best News Sites</Text>
    <Sites/>
    <Text style={styles.titleStyle}>News</Text>
    <NewsStockApi/>
    </ScrollView>
    </View> 
    
  )
}

const styles = StyleSheet.create(
  {
    container:{
      height:'100%'
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


export default ChartScreen