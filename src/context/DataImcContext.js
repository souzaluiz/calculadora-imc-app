import React, { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

import calculateIMC from '../utils/calculateIMC'

const DataImcContext = createContext()

export function DataImcProvider ({ children }) {
  const [waiting, setWaiting] = useState(true)
  const [data, setData] = useState({})
  const [values, setValues] = useState({
    weight: 15.0,
    height: 0.5
  })

  function calculateImc () {
    const result = calculateIMC(values)
    setData(result)
    setWaiting(false)
  }

  function clearResult () {
    setWaiting(true)
  }

  return (
    <DataImcContext.Provider
      value={{ calculateImc, values, setValues, waiting, data, clearResult }}
    >
      {children}
    </DataImcContext.Provider>
  )
}

DataImcProvider.propTypes = {
  children: PropTypes.any
}

export function useDataImc () {
  const {
    values,
    setValues,
    waiting,
    data,
    calculateImc,
    clearResult
  } = useContext(DataImcContext)

  return {
    values,
    setValues,
    waiting,
    data,
    calculateImc,
    clearResult
  }
}
