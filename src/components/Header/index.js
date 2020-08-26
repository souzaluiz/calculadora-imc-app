import React from 'react'

import {
  HeaderWrapper,
  HeaderTitle,
  HeaderButton,
  HeaderButtonIcon,
  HeaderBoxVoid
} from './styles'

import restoreIcon from '../../assets/rotate-ccw.png'

function Header () {
  return (
    <HeaderWrapper>
      <HeaderBoxVoid />

      <HeaderTitle>Calculadora IMC</HeaderTitle>
      <HeaderButton>
        <HeaderButtonIcon
          source={restoreIcon}
          resizeMode="contain"
        />
      </HeaderButton>
    </HeaderWrapper>
  )
}

export default Header
