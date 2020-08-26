import React from 'react'

import {
  HeaderWrapper,
  HeaderTitle,
  HeaderButton,
  HeaderButtonIcon,
  HeaderBoxVoid
} from './styles'

import { useInfo } from '../../context/InfoProvider'

import clearInfoIcon from '../../assets/rotate-ccw.png'

function Header () {
  const { values, setValues } = useInfo()

  function clearInfors () {
    setValues({
      ...values,
      resultAvailable: false
    })
  }

  return (
    <HeaderWrapper>
      <HeaderBoxVoid />

      <HeaderTitle>Calculadora IMC</HeaderTitle>
      <HeaderButton onPress={clearInfors}>
        <HeaderButtonIcon
          source={clearInfoIcon}
          resizeMode="contain"
        />
      </HeaderButton>
    </HeaderWrapper>
  )
}

export default Header
