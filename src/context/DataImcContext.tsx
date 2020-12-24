import React, { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

import calculateIMC from '../utils/calculateIMC'

export interface ImcContextType {
  waiting: boolean
  values: object
  data: object
  setValues: Function
  clearResult: Function
  calculateImc: Function
}

const DataImcContext = createContext<ImcContextType>({} as ImcContextType)

const defaultValues = { weight: 15.0, height: 0.5 }

export const DataImcProvider: React.FC = ({ children }) => {
  const [waiting, setWaiting] = useState(true)
  const [data, setData] = useState({})
  const [values, setValues] = useState(defaultValues)

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

export function useDataImc (): ImcContextType {
  const context = useContext(DataImcContext)

  return { ...context }
}
