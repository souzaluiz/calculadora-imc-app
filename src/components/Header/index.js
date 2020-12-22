import React from 'react'

import {
  Wrapper,
  Title,
  Void,
  Button
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
    <Wrapper>
      <Void />

      <Title>Calculadora IMC</Title>

      <Button onPress={clearInfors}>
        <Button.Icon
          source={clearInfoIcon}
          resizeMode="contain"
        />
      </Button>
    </Wrapper>
  )
}

export default Header
