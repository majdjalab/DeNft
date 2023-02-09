import { View, StyleSheet } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import { useNavigation } from "@react-navigation/native"


const Categories = () => {

  const navigation = useNavigation(); 
  return (
    <View>              
        <View style={styles.container}>
          <CategoryCard imgUrl="https://wallpaper.dog/large/20542244.jpg" title={"Contracts"} NavTo={"ContractApi"}/>
          <CategoryCard imgUrl="https://wallpaper.dog/large/20525503.jpg" title={"Bitcoin News"} NavTo={"NewsCurrencyApi"}/>
          <CategoryCard imgUrl="https://wallpaper.dog/large/20542272.jpg" title={"Monkey Nft"} NavTo={"MonkeyNftApi"}/>
          <CategoryCard imgUrl="https://assets-global.website-files.com/623ab58321ca25f489fca9e6/6258071f0c7318cec2318807_KaisBear2.png" title={"Bear Nft"} NavTo={"BearNftApi"}/>
          <CategoryCard imgUrl="https://wallpaper.dog/large/20542395.jpg" title={"Top Nft"} NavTo={"TopNftApi"}/>
          <CategoryCard imgUrl="https://wallpaper.dog/large/20542283.jpg" title={"Coins"} NavTo={"CoinApi"}/>
        </View>
        </View>

  )
}


const styles = StyleSheet.create(
  {
    container:{
      flexDirection:'row',
      flexWrap:'wrap',
      alignItems:'center',
    }
  }
);

export default Categories