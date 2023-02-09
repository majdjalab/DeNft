import React, {useContext, useState, useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import IoniIcon from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../screens/HomeScreen'
import ChartScreen from '../screens/ChartScreen'
import CategoryScreen from '../screens/CategoryScreen'
import themeContext from "../config/themeContext"



const Tab = createBottomTabNavigator();

function Tabs() {
  const theme = useContext(themeContext);
  const [mode, setMode] = useState(false);
  //Delete the title on the top of the screen 
  const navigation = useNavigation();
  useLayoutEffect(() => {
  navigation.setOptions({
      headerShown:false,
  });
  }, []);


return (
<Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle:{
        overflow:'scroll',
        position: 'absolute',
        left: '8%',
        right: '15%', 
        bottom: '4%',
        height: '9%',
        width: '85%',
        borderWidth: 1,
        borderTopWidth:1,
        borderRadius: 20,
        borderTopColor: theme.icons,
        borderColor: theme.icons,
        backgroundColor:theme.background
      }}}>

        
  {/* Main Screen Start*/}
  <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
          tabBarIcon: ({focused}) =>  (

      <View style={styles.navItem}>
          <IoniIcon name={focused? 'home':'home-outline'} size={30} 
            style={{color:focused? '#F4D03F':theme.icons, margin: '2%',}}  />
          <Text style={[styles.itemStyle, {color:focused? '#F4D03F':theme.color}]} >Home</Text>
      </View>

        ),
      }}
        />
  {/* Main Screen End*/}       


  {/* Chart Screen Start */}
    <Tab.Screen
          name='News'
          component={ChartScreen}
          options={{
          tabBarIcon: ({focused}) =>  (

      <View style={styles.navItem}>
          <Icon name={focused? 'bell':'bell-o'} size={30} 
            style={{color:focused? '#F4D03F':theme.icons, margin: '2%',}}  />
          <Text style={[styles.itemStyle, {color:focused? '#F4D03F':theme.color}]} >News</Text>
      </View>

        ),
      }}
        />
  {/* Chart Screen End */}
  
  
  {/* Category Screen Start */}
  <Tab.Screen
          name='Category'
          component={CategoryScreen}
          options={{
          tabBarIcon: ({focused}) =>  (

      <View style={styles.navItem}>
          <IoniIcon name={focused? 'ios-apps':'ios-apps-outline'} size={30} 
            style={{color:focused? '#F4D03F':theme.icons, margin: '2%',}}  />
          <Text style={[styles.itemStyle, {color:focused? '#F4D03F':theme.color}]} >Category</Text>
      </View>

        ),
      }}
        />
  {/* Chart Screen End */}


</Tab.Navigator>
  );
}

const styles = StyleSheet.create({

  navItem: {
    alignItems:'center',
    margin:'12%',
  },

  itemStyle: {
    margin: '2%', 
    fontWeight:'bold', 
    fontSize:13
  }
});


export default function BottomNav() {
  return (
      <Tabs />
  );
}
