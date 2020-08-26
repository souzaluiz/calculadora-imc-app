import React, { createContext, useState, useContext } from 'react'

const InfoContext = createContext()

export default function InfoProvider ({ children }) {
  const [values, setValues] = useState({
    weight: 15,
    height: 0.50,
    onClick: false
  })

  return (
    <InfoContext.Provider value={{ values, setValues }}>
      {children}
    </InfoContext.Provider>
  )
}

export function useInfo () {
  const { values, setValues } = useContext(InfoContext)
  return {
    values,
    setValues
  }
}
