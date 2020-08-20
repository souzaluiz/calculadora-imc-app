import React from 'react'

import { CardsContainer, ButtonCalculate } from './styles'

import Header from '../../components/Header'
import DataCard from '../../components/DataCard'

function Home () {
  return (
    <>
      <Header />
      <CardsContainer>
        <DataCard
          title="Peso (kg)"
          minimumValue={15.0}
          step={0.1}
          decimalPlaces={1}
          maximumValue={350.0}
          buttons
        />

        <DataCard
          title="Altura (m)"
          minimumValue={0}
          step={0.01}
          maximumValue={2.4}
        />
        <ButtonCalculate>
          <ButtonCalculate.Text>Calcular</ButtonCalculate.Text>
        </ButtonCalculate>

      </CardsContainer>
    </>
  )
}

export default Home
