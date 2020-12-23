import React from 'react'
import { StatusBar } from 'react-native'

import { DataImcProvider } from './context/DataImcContext'
import colors from './styles/colors'
import Home from './screens/Home'

export default function App () {
  return (
    <DataImcProvider>
      <StatusBar backgroundColor={colors.blackColor} barStyle="light-content"/>
      <Home/>
    </DataImcProvider>
  )
}
