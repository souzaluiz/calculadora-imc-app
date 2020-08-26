import React, { useEffect, useState } from 'react'
import {
  CardWrapper,
  SmallText,
  LargText,
  MediumText,
  ImageLoading
} from './styles'

import colors from '../../styles/colors'
import hourglassIcon from '../../assets/hourglass.png'

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
  }, [values.onClickCalculate])

  return (
    <>
      {!values.resultAvailable
        ? (
          <CardWrapper>
            <SmallText color={colors.whiteColor}>AGUARDANDO INFORMAÇÕES</SmallText>
            <ImageLoading
              resizeMode="contain"
              source={hourglassIcon}
            />
          </CardWrapper>
        )
        : (
          <CardWrapper>
            <SmallText color={colors.whiteColor}>VOCÊ ESTÁ{data.complement && ' com'}</SmallText>
            <LargText color={data.color}>{data.situation}</LargText>
            <SmallText color={colors.whiteColor}>SEU IMC É</SmallText>
            <MediumText color={data.color}>{data.imc}</MediumText>
          </CardWrapper>
        )}
    </>
  )
}

export default ResultCard
