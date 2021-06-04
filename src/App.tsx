import React from 'react'
import { StatusBar } from 'react-native'
import { useFonts } from 'expo-font'

import { DataImcProvider } from './context/DataImcContext'
import colors from './styles/colors'
import Home from './screens/Home'
import { loadFonts } from './assets/fonts'

export default function App () {
  const [fontsLoaded] = useFonts(loadFonts())

  if(!fontsLoaded) return null;

  return (
    <DataImcProvider>
      <StatusBar backgroundColor={colors.blackColor} barStyle="light-content"/>
      <Home/>
    </DataImcProvider>
  )
}
