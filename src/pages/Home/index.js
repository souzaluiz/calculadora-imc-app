import React from 'react'

import {
  HomeWrapper,
  CardsContainer,
  ButtonCalculate,
  ButtonCalculateText
} from './styles'

import Header from '../../components/Header'
import DataCard from '../../components/DataCard'
import ResultCard from '../../components/ResultCard'
import { useInfo } from '../../context/InfoProvider'

function Home () {
  const { values, setValues } = useInfo()

  function calculateImc () {
    setValues({
      ...values,
      onClickCalculate: !values.onClickCalculate
    })
  }

  return (
    <HomeWrapper>
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
        />

        <DataCard
          title="Altura (m)"
          minimumValue={0.50}
          step={0.01}
          name="height"
          maximumValue={2.3}
        />

        <ButtonCalculate onPress={calculateImc}>
          <ButtonCalculateText>Calcular</ButtonCalculateText>
        </ButtonCalculate>

      </CardsContainer>
    </HomeWrapper>
  )
}

export default Home
