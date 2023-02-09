import { View, Text, ScrollView, StyleSheet, FlatList, Linking } from 'react-native'
import React, { useLayoutEffect, useState, useEffect, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import themeContext from "../config/themeContext"
import { TouchableOpacity } from 'react-native-gesture-handler'


const NewsStockApi = () => {

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

fetch('https://mboum-finance.p.rapidapi.com/ne/news', options)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
    
  return (

    <View>
  <ScrollView style={[styles.mainCategoryContainer, {backgroundColor:theme.background}]}>
    <View style={{padding:8, marginBottom:224, backgroundColor:theme.background}}>
      <FlatList
          data={data}
          keyExtractor={({title}) => title}
          renderItem={({ item }) => (
            <TouchableOpacity style={[styles.newsStyle, {borderColor:theme.text, backgroundColor:theme.card}]} onPress={() => {Linking.openURL(item.link);}}>
            <Text style={[styles.titleStyle, {color:theme.text}]}>{item.title}</Text>
            <Text style={[styles.dateStyle, {color:theme.text}]}>Date : {item.pubDate}</Text>
            <Text style={[styles.sourceStyle, {color:theme.text}]}>Source : {item.source}</Text>
            <View style={{alignItems:'center'}}>
              <Text onPress={() => {Linking.openURL(item.link);}} style={{color:theme.text}}>To The News Page</Text>
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
    titleStyle:{
      fontSize:16,
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

export default NewsStockApi