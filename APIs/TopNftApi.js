import { View, Text, ScrollView, StyleSheet, FlatList, Linking, RefreshControl } from 'react-native'
import React, { useLayoutEffect, useState, useEffect, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import TopNav from '../components/TopNav'
import themeContext from "../config/themeContext"
import { TouchableOpacity } from 'react-native-gesture-handler'


const TopNftApi = () => {

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
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4587d5141amshd77af3daf8f6cbfp1c8be6jsn2d769de5c26a',
            'X-RapidAPI-Host': 'top-nft-sales.p.rapidapi.com'
        }
    };
    
    fetch('https://top-nft-sales.p.rapidapi.com/sales/30d', options)
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
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
    <View style={{padding:8, marginBottom:224, backgroundColor:theme.background}}>
      <FlatList
          data={data}
          keyExtractor={({gold}) => gold}
          renderItem={({ item }) => (
            <TouchableOpacity style={[styles.newsStyle, {borderColor:theme.text, backgroundColor:theme.card}]} onPress={() => {Linking.openURL(item.collection_url);}}>
            <Text style={[styles.titleStyle, {color:theme.text}]}>{item.nft_name}</Text>
            <Text style={[styles.sourceStyle, {color:theme.text}]}>Collection : {item.collection}</Text>
            <Text style={[styles.sourceStyle, {color:theme.text}]}>Price : {item.price}</Text>
            <View style={{alignItems:'center'}}>
              <Text onPress={() => {Linking.openURL(item.collection_url);}} style={{color:theme.text}}>To The Collection Page</Text>
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
      margin:'3%',
    },
    titleStyle:{
      fontSize:18,
      margin:'4%'
    },
    dateStyle:{
      fontSize:13,
      marginTop:'3%',
      marginLeft:'4%',
      marginRight:'3%'
    },
    sourceStyle:{
      fontSize:13,
      marginTop:'1%',
      marginLeft:'4%',
      marginRight:'3%',
      marginBottom:'4%'
    },
  }
);

export default TopNftApi