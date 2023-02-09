import { View, Text } from 'react-native'
import React from 'react'
import SiteCard from './SiteCard'

const Cards = () => {
  return (
    <View>
          <SiteCard imgUr="https://wallpaper.dog/large/20542265.jpg" titl={"Domäne"} />
          <SiteCard imgUrl="https://wallpaper.dog/large/20542265.jpg" title={"Domäne"} />
          <SiteCard imgUrl="https://wallpaper.dog/large/20542265.jpg" title={"Domäne"} />
          <SiteCard imgUrl="https://wallpaper.dog/large/20542399.jpg" title={"Fotografie"}/>
          <SiteCard imgUrl="https://wallpaper.dog/large/20542422.jpg" title={"Dienstprogramm"}/>
          <SiteCard imgUrl="https://wallpaper.dog/large/20542483.png" title={"Virtuell"}/>
    </View>
  )
}

export default Cards