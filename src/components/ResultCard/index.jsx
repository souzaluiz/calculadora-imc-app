import React, { useEffect, useState } from 'react'

import LottieView from 'lottie-react-native'

import {
  CardWrapper,
  SmallText,
  LargText,
  MediumText
} from './styles'

import colors from '../../styles/colors'
import calculateIMC from '../../utils/calculateIMC'
import { useDataImc } from '../../context/DataImcContext'
import { useIsMount } from '../../hooks/useIsMount'

const ResultCard = () => {
  const isMount = useIsMount()
  const [data, setData] = useState({})
  const { values, setValues } = useDataImc()

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
            <LottieView
              source={require('../../assets/lottie/loading.json')}
              autoPlay
              loop
              style={{ width: 120 }}
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
