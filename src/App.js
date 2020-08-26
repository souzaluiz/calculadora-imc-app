import React from 'react'
import { StatusBar } from 'react-native'

import InfoProvider from './context/InfoProvider'
import { AppWrapper } from './styles/AppWrapper'
import Home from './pages/Home'

export default function App () {
  return (
    <InfoProvider>
      <AppWrapper>
        <StatusBar backgroundColor={'#00141B'} barStyle="light-content"/>
        <Home/>
      </AppWrapper>
    </InfoProvider>
  )
}
