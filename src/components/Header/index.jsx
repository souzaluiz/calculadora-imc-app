import React from 'react'

import {
  Wrapper,
  Title,
  Void,
  Button
} from './styles'

import { useDataImc } from '../../context/DataImcContext'

function Header () {
  const { values, setValues } = useDataImc()

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
