import React from 'react'
import { StatusBar } from 'react-native'

import InfoProvider from './context/InfoProvider'
import colors from './styles/colors'
import { AppWrapper } from './styles/AppWrapper'
import Home from './pages/Home'

export default function App () {
  return (
    <InfoProvider>
      <AppWrapper>
        <StatusBar backgroundColor={colors.blackColor} barStyle="light-content"/>
        <Home/>
      </AppWrapper>
    </InfoProvider>
  )
}
