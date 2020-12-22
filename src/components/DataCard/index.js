import React from 'react'
import PropTypes from 'prop-types'

import {
  CardWrapper,
  CardTitle,
  CardValue,
  ActionsContainer,
  Button,
  SliderControl
} from './styles'

import { useInfo } from '../../context/InfoProvider'

function DataCard (props) {
  const { values, setValues } = useInfo()

  function increment () {
    if (values[props.name] < props.maximumValue) {
      setValues({
        ...values,
        [props.name]: values[props.name] + props.step
      })
    }
  }

  function decrement () {
    if (values[props.name] > props.minimumValue) {
      setValues({
        ...values,
        [props.name]: values[props.name] - props.step
      })
    }
  }

  return (
    <CardWrapper>
      <CardTitle>{props.title}</CardTitle>
      <CardValue>{values[props.name].toFixed(props.decimalPlaces)}</CardValue>

      <ActionsContainer>
        <Button onPress={decrement} >
          <Button.LessIcon />
        </Button>

        <SliderControl
          minimumValue={props.minimumValue}
          step={props.step}
          value={values[props.name]}
          maximumValue={props.maximumValue}
          onValueChange={valuesSlider => (
            setValues({
              ...values,
              [props.name]: valuesSlider
            })
          )}
          minimumTrackTintColor="#F1F2F6"
          maximumTrackTintColor="#A6A8B9"
        />

        <Button onPress={increment} >
          <Button.MoreIcon />
        </Button>
      </ActionsContainer>
    </CardWrapper>
  )
}

DataCard.defaultProps = {
  decimalPlaces: 2
}

DataCard.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  minimumValue: PropTypes.number.isRequired,
  maximumValue: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  decimalPlaces: PropTypes.number
}

export default DataCard
