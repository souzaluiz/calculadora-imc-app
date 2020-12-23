import React, { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

const DataImcContext = createContext()

export function DataImcProvider ({ children }) {
  const [values, setValues] = useState({
    weight: 15.0,
    height: 0.5,
    onClickCalculate: false,
    resultAvailable: false
  })

  return (
    <DataImcContext.Provider value={{ values, setValues }}>
      {children}
    </DataImcContext.Provider>
  )
}

DataImcProvider.propTypes = {
  children: PropTypes.any
}

export function useDataImc () {
  const { values, setValues } = useContext(DataImcContext)

  return { values, setValues }
}
