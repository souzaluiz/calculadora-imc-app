import React from 'react'
import { StatusBar } from 'react-native'
import Home from './pages/Home'
import { AppWrapper } from './styles/global'

export default function App () {
  return (
    <AppWrapper>
      <StatusBar backgroundColor={'#00141B'} barStyle="light-content"/>
      <Home/>
    </AppWrapper>
  )
}
