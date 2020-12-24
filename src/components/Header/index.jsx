import React from 'react'

import { Wrapper, Title, Void, Button } from './styles'

import { useDataImc } from '../../context/DataImcContext'

function Header () {
  const { clearResult } = useDataImc()

  return (
    <Wrapper>
      <Void />

      <Title>Calculadora IMC</Title>

      <Button onPress={clearResult}>
        <Button.Icon />
      </Button>
    </Wrapper>
  )
}

export default Header
