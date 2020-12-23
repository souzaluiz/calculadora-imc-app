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

import { useDataImc } from '../../context/DataImcContext'

function ControlCard (props) {
  const { values, setValues } = useDataImc()

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
          value={props.minimumValue}
          maximumValue={props.maximumValue}
          onValueChange={valueSlider => (
            setValues({
              ...values,
              [props.name]: valueSlider
            })
          )}
        />

        <Button onPress={increment} >
          <Button.MoreIcon />
        </Button>
      </ActionsContainer>
    </CardWrapper>
  )
}

ControlCard.defaultProps = {
  decimalPlaces: 2
}

ControlCard.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  minimumValue: PropTypes.number.isRequired,
  maximumValue: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  decimalPlaces: PropTypes.number
}

export default ControlCard
