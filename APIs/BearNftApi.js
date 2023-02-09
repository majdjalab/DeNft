import { View, Text, ScrollView, StyleSheet, FlatList, Image, RefreshControl } from 'react-native'
 import React, { useLayoutEffect, useState, useEffect, useContext, } from 'react'
 import { useNavigation } from '@react-navigation/native'
 import TopNav from '../components/TopNav'
 import themeContext from "../config/themeContext"

 
const BearNftApi = () => {

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
          accept: 'application/json',
          Authorization: '3814f9b2-bfa8-4889-89cf-6ea40135e62b'
        }
      };
  
      fetch('https://api.nftport.xyz/v0/solana/nfts/okay-bears-3fb117dd?page_number=1&page_size=50&include=metadata&refresh_metadata=false', options)
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
            data={data.nfts}
            keyExtractor={({name}) => name}
            renderItem={({ item }) => (
          <View>
              <Image style={styles.contractImage} source={{uri:item.cached_file_url}} />
            <View  style={[styles.touchableContainer, {backgroundColor:theme.color}]} >
              <Text  style={styles.contractName}>{item.metadata.name}</Text>
              <Text style={[styles.contractAddress, { color:theme.background}]}>Collection ID : {item.collection_id}{"\n"}Mint Address :  {item.mint_address}</Text>
            </View>
          </View>
            )}
          />
      </View>
   </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create(
  {
  
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
    contractImage:{
      width:'75%',
      height:300,
      marginTop: '5%',
      marginLeft:'10%',
      marginRight:'10%',
      marginBottom:'3%',
      borderRadius:10,
    },
    touchableContainer:{
      marginTop: '2%',
      marginLeft:'10%',
      marginRight:'10%',
      marginBottom:'3%',
      width:'75%',
      alignContent:'center',
      alignItems:'center',
      borderRadius:10 ,
    },
    categoryTitle:{
      width:'100%',
      height: 48,
      borderRadius:10,
      marginTop:4,
    },
  }
);

export default BearNftApi