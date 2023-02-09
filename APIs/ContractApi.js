import { View, Text, ScrollView, StyleSheet, FlatList, Image, RefreshControl} from 'react-native'
import React, { useLayoutEffect, useState, useEffect, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import TopNav from '../components/TopNav'
import themeContext from "../config/themeContext"

const ContractApi= () => {


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
    fetch('https://api.nftport.xyz/v0/contracts/top?page_size=10&page_number=1', options)
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
            data={data.contracts}
            keyExtractor={({metadata}) => metadata}
            renderItem={({ item }) => (
          <View>
              <Image style={styles.contractImage} source={{uri:item.metadata.banner_url}} />
            <View style={[styles.touchableContainer, {backgroundColor:theme.color}]} >
              <Text  style={styles.contractName}>{item.name}</Text>
              <Text style={[styles.contractAddress, { color:theme.background}]}>Chain : {item.chain}{"\n"}Contract Address :  {item.contract_address}</Text>
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
      marginRight: '7%',
      marginLeft:'7%',
      fontSize:13,

    },
    contractImage:{
      width:'75%',
      height:200,
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
export default ContractApi