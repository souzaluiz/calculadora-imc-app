import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Slider from '@react-native-community/slider'

import { CardWrapper, Card, ButtonsWrapper, Button } from './styles'

import plusIcon from '../../assets/plus.png'
import minusIcon from '../../assets/minus.png'

function DataCard (props) {
  const [weight, setWeight] = useState(0)

  function addGrams () {
    if (weight < props.maximumValue) {
      setWeight(weight => weight + 0.1)
    }
  }

  function removeGrams () {
    if (weight > props.minimumValue) {
      setWeight(weight => weight - 0.1)
    }
  }

  return (
    <CardWrapper>
      <Card.Title>{props.title}</Card.Title>
      <Card.Value>{weight.toFixed(props.decimalPlaces)}</Card.Value>
      <Slider
        style={{ width: '80%', height: 40 }}
        minimumValue={props.minimumValue}
        step={props.step}
        value={weight}
        maximumValue={props.maximumValue}
        onValueChange={valueSlider => setWeight(valueSlider)}
        minimumTrackTintColor="#F1F2F6"
        maximumTrackTintColor="#A6A8B9"
      />
      {props.buttons && (
        <ButtonsWrapper>
          <Button
            onPress={removeGrams}
          >
            <Button.Image
              source={minusIcon}
              resizeMode="center"
            />
          </Button>

          <Button
            onPress={addGrams}
          >
            <Button.Image
              source={plusIcon}
              resizeMode="center"
            />
          </Button>
        </ButtonsWrapper>
      )}
    </CardWrapper>
  )
}

DataCard.defaultProps = {
  decimalPlaces: 2
}

DataCard.propTypes = {
  title: PropTypes.string,
  minimumValue: PropTypes.number.isRequired,
  maximumValue: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  decimalPlaces: PropTypes.number,
  buttons: PropTypes.bool
}

export default DataCard
