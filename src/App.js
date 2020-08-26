import React from 'react'
import { StatusBar } from 'react-native'
import Home from './pages/Home'
import { AppWrapper } from './styles/global'
import InfoProvider from './context/InfoProvider'

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
