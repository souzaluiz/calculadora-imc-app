import React, { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

const InfoContext = createContext()

export default function InfoProvider ({ children }) {
  const [values, setValues] = useState({
    weight: 15,
    height: 0.50,
    onClickCalculate: false,
    resultAvailable: false
  })

  return (
    <InfoContext.Provider value={{ values, setValues }}>
      {children}
    </InfoContext.Provider>
  )
}

InfoProvider.propTypes = {
  children: PropTypes.any
}

export function useInfo () {
  const { values, setValues } = useContext(InfoContext)
  return {
    values,
    setValues
  }
}
