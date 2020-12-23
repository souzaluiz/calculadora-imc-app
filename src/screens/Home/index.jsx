import React from 'react'

import Header from '../../components/Header'
import ControlCard from '../../components/ControlCard'
import ResultCard from '../../components/ResultCard'

import { useDataImc } from '../../context/DataImcContext'

import { Wrapper, Cards, Button } from './styles'

function Home () {
  const { values, setValues } = useDataImc()

  function calculateImc () {
    setValues({
      ...values,
      onClickCalculate: !values.onClickCalculate
    })
  }

  return (
    <Wrapper>
      <Header />

      <Cards>
        <ResultCard />

        <ControlCard
          title="Peso (kg)"
          minimumValue={15.0}
          maximumValue={150.0}
          step={0.1}
          name="weight"
          decimalPlaces={1}
        />

        <ControlCard
          title="Altura (m)"
          minimumValue={0.5}
          maximumValue={2.3}
          step={0.01}
          name="height"
        />

        <Button onPress={calculateImc}>
          <Button.Text>Calcular</Button.Text>
        </Button>

      </Cards>
    </Wrapper>
  )
}

export default Home
