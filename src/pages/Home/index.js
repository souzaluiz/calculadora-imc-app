import React from 'react'

import { CardsContainer, ButtonCalculate } from './styles'

import Header from '../../components/Header'
import DataCard from '../../components/DataCard'
import ResultCard from '../../components/ResultCard'
import { useInfo } from '../../context/InfoProvider'

function Home () {
  const { values, setValues } = useInfo()

  function calculateImc () {
    setValues({
      ...values,
      onClick: !values.onClick
    })
  }

  return (
    <>
      <Header />

      <CardsContainer>
        <ResultCard />

        <DataCard
          title="Peso (kg)"
          minimumValue={15.0}
          step={0.1}
          name="weight"
          decimalPlaces={1}
          maximumValue={150.0}
          buttons
        />

        <DataCard
          title="Altura (m)"
          minimumValue={0.50}
          step={0.01}
          name="height"
          maximumValue={2.3}
        />

        <ButtonCalculate onPress={calculateImc}>
          <ButtonCalculate.Text>Calcular</ButtonCalculate.Text>
        </ButtonCalculate>

      </CardsContainer>
    </>
  )
}

export default Home
