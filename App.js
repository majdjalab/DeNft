import React, {useState, useEffect} from 'react'
import { NavigationContainer, } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import BottomNav from './components/BottomNav'
import {EventRegister} from "react-native-event-listeners"
import themeContext from "./config/themeContext"
import theme from "./config/theme"
import 'react-native-gesture-handler'
import ChartScreen from './screens/ChartScreen'
import CategoryScreen from './screens/CategoryScreen'
import ContractApi from './APIs/ContractApi'
import NewsCurrencyApi from './APIs/NewsCurrencyApi'
import MonkeyNftApi from './APIs/MonkeyNftApi'
import CoinApi from './APIs/CoinApi'
import BearNftApi from './APIs/BearNftApi'
import TopNftApi from './APIs/TopNftApi'



export default function App() {

  const Stack = createNativeStackNavigator();
  const [mode, setMode] = useState(false);

  useEffect(()=> {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setMode(data);
      }
    );
    return () =>{
      EventRegister.removeEventListener(eventListener);
    };
  });


  return (
    <themeContext.Provider value = {mode === true ? theme.dark : theme.light}>
    <NavigationContainer >
    <Stack.Navigator>
        <Stack.Screen name="BottomNav" component={BottomNav} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ChartScreen" component={ChartScreen} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen name="ContractApi" component={ContractApi} />
        <Stack.Screen name="NewsCurrencyApi" component={NewsCurrencyApi} />
        <Stack.Screen name="MonkeyNftApi" component={MonkeyNftApi} />
        <Stack.Screen name="BearNftApi" component={BearNftApi} />
        <Stack.Screen name="CoinApi" component={CoinApi} />
        <Stack.Screen name="TopNftApi" component={TopNftApi} />
      </Stack.Navigator>
    </NavigationContainer>
    </themeContext.Provider>
  );
}


