import React, { useEffect, useState } from 'react'
import {
  CardWrapper,
  SmallText,
  LargText,
  MediumText,
  ImageLoading
} from './styles'

import ampulhetaIcon from '../../assets/ampulheta.png'

import calculateIMC from '../../utils/calculateIMC'
import { useInfo } from '../../context/InfoProvider'
import { useIsMount } from '../../hooks/useIsMount'

const ResultCard = () => {
  const isMount = useIsMount()
  const [data, setData] = useState({})
  const { values, setValues } = useInfo()

  useEffect(() => {
    if (!isMount) {
      const result = calculateIMC(values)
      setData(result)
      if (!values.resultAvailable) {
        setValues({
          ...values,
          resultAvailable: true
        })
      }
    }
  }, [values.onClick])

  /* useDidUpdate(() => {
    const result = calculateIMC(values)
    setData(result)
  }, [values.onClick]) */

  return (
    <>
      {!values.resultAvailable
        ? (
          <CardWrapper>
            <SmallText color="white">AGUARDANDO INFORMAÇÕES</SmallText>
            <ImageLoading
              resizeMode="contain"
              source={ampulhetaIcon}
            />
          </CardWrapper>
        )
        : (
          <CardWrapper>
            <SmallText color="white">VOCÊ ESTÁ</SmallText>
            <LargText color={data.color}>{data.situation}</LargText>
            <SmallText color="white">SEU IMC É</SmallText>
            <MediumText color={data.color}>{data.imc}</MediumText>
          </CardWrapper>
        )}
    </>
  )
}

export default ResultCard
