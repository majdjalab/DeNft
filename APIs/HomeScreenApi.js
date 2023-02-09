import { View, Text, ScrollView, StyleSheet, FlatList, Linking } from 'react-native'
import React, { useLayoutEffect, useState, useEffect, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import themeContext from "../config/themeContext"
import { TouchableOpacity } from 'react-native-gesture-handler'


const HomeScreenApi = () => {

  const [modalVisible, setModalVisible] = useState(false);

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
            'X-RapidAPI-Host': 'mboum-finance.p.rapidapi.com'
        }
    };
    
    fetch('https://mboum-finance.p.rapidapi.com/co/collections/most_actives?start=0', options)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
    
  return (


      <FlatList
          data={data.quotes}
          keyExtractor={({quotes}) => quotes}
          renderItem={({ item }) => (
            <View >
            <TouchableOpacity style={[styles.stockStyle, {borderColor:theme.text, backgroundColor:theme.card}]}>
            <Text style={[styles.titleStyle, {color:theme.text}]}>{item.longName}</Text>
            <Text style={{ marginLeft:'4%', fontSize:16, color:'#27AE60'}}>{item.regularMarketOpen} + {item.currency}</Text>
            <View style={styles.descStyle}>
            <Text style={[styles.dataStyle, {color:theme.text}]}>Region : {item.region}</Text>
            <Text style={[styles.dataStyle, {color:theme.text}]}>Symbol : {item.symbol}</Text>
            <Text style={[styles.dataStyle, {color:theme.text}]}>Quote Type : {item.quoteType}</Text>
            </View>
            </TouchableOpacity>
            </View>
          )}
        />

  )
}



const styles = StyleSheet.create(
  {
    stockStyle:{
      borderWidth:1,
      borderRadius:15,
      marginLeft:'6%',
      marginRight:'6%',
      marginTop:'3%'
    },
    descStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginBottom:'10%'
    },
    titleStyle:{
      fontSize:18,
      marginTop:'5%',
      margin:'4%'
    },
    dataStyle:{
      fontSize:13,
      marginLeft:'4%',
      marginRight:'4%',
      marginTop:'2%',
    },

  }
);

export default HomeScreenApi