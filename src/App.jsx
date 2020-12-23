import React from 'react'
import { StatusBar } from 'react-native'

import InfoProvider from './context/InfoProvider'
import colors from './styles/colors'
import Home from './screens/Home'

export default function App () {
  return (
    <InfoProvider>
      <StatusBar backgroundColor={colors.blackColor} barStyle="light-content"/>
      <Home/>
    </InfoProvider>
  )
}
