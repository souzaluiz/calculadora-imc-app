import React from 'react'

import {
  Wrapper,
  Title,
  Void,
  Button
} from './styles'

import { useInfo } from '../../context/InfoProvider'

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
        <Button.Icon />
      </Button>
    </Wrapper>
  )
}

export default Header
