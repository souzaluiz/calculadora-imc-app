import React from 'react'

import Header from '../../components/Header'
import ControlCard from '../../components/ControlCard'
import ResultCard from '../../components/ResultCard'

import { useDataImc } from '../../context/DataImcContext'

import { Wrapper, Cards, Button } from './styles'
import { Tabs } from 'native-base'

function Home () {
  const { calculateImc } = useDataImc()

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

      <Tabs.Views>
        <Tabs.View>One</Tabs.View>
        <Tabs.View>Two</Tabs.View>
        <Tabs.View>Three</Tabs.View>
      </Tabs.Views>

      <Tabs >
        <Tabs.Bar>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Twos</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
        </Tabs.Bar>

      </Tabs>

    </Wrapper>
  )
}

export default Home
