import React from 'react'

import {
  Wrapper,
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
    <Wrapper>
      <Header />

      <CardsContainer>
        <ResultCard />

        <DataCard
          title="Peso (kg)"
          minimumValue={15.0}
          maximumValue={150.0}
          step={0.1}
          name="weight"
          decimalPlaces={1}
        />

        <DataCard
          title="Altura (m)"
          minimumValue={0.5}
          maximumValue={2.3}
          step={0.01}
          name="height"
        />

        <ButtonCalculate onPress={calculateImc}>
          <ButtonCalculateText>Calcular</ButtonCalculateText>
        </ButtonCalculate>

      </CardsContainer>
    </Wrapper>
  )
}

export default Home
