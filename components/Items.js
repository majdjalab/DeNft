import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Items = () => {
  return (
<View style={styles.container}>
    <Text style={styles.titleStyle}>Kategorien</Text>
    <ScrollView>
        <CategoryCard imgUrl="https://cdn-icons.flaticon.com/png/128/5545/premium/5545063.png?token=exp=1659122913~hmac=7aba0563fc713e14fa33319ef458e9d6" title={"collections"} />
        <CategoryCard imgUrl='./assets/snack-icon.png' title={"OpenSea"}/>
        <CategoryCard imgUrl="https://magiceden.io/static/media/logo.ca418d755e6ce4e95fd276056b9285f2.svg" title={"MagicEden"}/>
        <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFEK00nvlCd9STsnhl8LsUBjPq4RgLzAisVw-vBZLUNYQiZbKjUQ0&usqp=CAE&s" title={"Rarible"}/>

    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    background:'#fff'
  },
  titleStyle:{
    marginTop:'3%',
    marginLeft:'6%',
    color:'#F4D03F',
    fontSize:24,
    lineHeight:32,
    fontWeight:'bold',
  }
});

export default Items