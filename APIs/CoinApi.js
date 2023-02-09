import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, Linking, RefreshControl } from 'react-native'
import React, { useLayoutEffect, useState, useEffect, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import TopNav from '../components/TopNav'
import themeContext from "../config/themeContext"
import Icon from 'react-native-vector-icons/FontAwesome'


const CoinApi = () => {


  //Delete the title on the top of the screen 
  const navigation = useNavigation();
  useLayoutEffect(() => {
  navigation.setOptions({
      headerShown:false,
  });
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const [refreshing, setRefreshing] = React.useState(false);
  const theme = useContext(themeContext);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);
  
  
    useEffect(() => {
      fetch('https://rest-sandbox.coinapi.io/v1/exchanges',{
      headers: {'Content-Type' : 'application/json',
        'X-CoinAPI-Key': '1F70BDC2-4E06-450E-B608-D77FD2F69511'}})
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    
  return (
    <View>
    <TopNav backIcon={"arrow-left"}/>
  <ScrollView style={[styles.mainCategoryContainer, {backgroundColor:theme.background}]}
  refreshControl={
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  }>
    <View style={{padding:8, marginBottom:224, backgroundColor:theme.background}}>
      <FlatList
          data={data}
          keyExtractor={({exchange_id}) => exchange_id}
          renderItem={({ item }) => (
            <TouchableOpacity style={[styles.newsStyle, {borderColor:theme.text, backgroundColor:theme.card}]} onPress={() => {Linking.openURL(item.website);}}>
            <Text  style={styles.contractName}>{item.name}</Text>
            <Text style={[styles.contractAddress, { color:theme.background}]}>ID : {item.exchange_id}</Text>
            <Text style={[styles.contractAddress, { color:theme.background}]}>Today Price : {item.volume_1day_usd}</Text>
            <View style={{alignItems:'center'}}>
              <Text onPress={() => {Linking.openURL(item.website);}} style={{color:theme.text}}>To The Coin Page</Text>
              <Icon  style={{color:theme.text, marginBottom:'6%'}} name={'angle-double-down'} size={28}/>
              </View>
            </TouchableOpacity>

          )}
        />
    </View>
 </ScrollView>
</View>
  )
}



const styles = StyleSheet.create(
  {
    newsStyle:{
      borderWidth:1,
      borderRadius:15,
      margin:'5%',
    },
    contractName:{
      marginBottom: '3%',
      paddingBottom:'2%',
      marginTop: '5%',
      marginLeft:'5%',
      fontSize:20,
      fontWeight:'bold',
      color:'#F4D03F',

    },
    contractAddress:{
      marginBottom: '1%',
      paddingBottom:'3%',
      marginRight: '5%',
      marginLeft:'5%',
      fontSize:12,

    },
    contractDesc:{
      marginBottom: '1%',
      marginLeft:'5%',
      marginRight:'5%',
      paddingBottom:'3%',
      fontSize:12,

    },
    contractImage:{
      width:'90%',
      height:200,
      marginTop:'5%',
      borderRadius:10,
    },
    touchableContainer:{
      margin: '5%',
      width:'75%',
      alignContent:'center',
      alignItems:'center',
      borderRadius:10 ,
    },

  }
);


export default CoinApi