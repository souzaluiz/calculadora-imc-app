import React, { useEffect, useState } from 'react'
import {
  CardWrapper,
  SmallText,
  LargText,
  MediumText,
  ImageLoading
} from './styles'
import PropTypes from 'prop-types'

import ampulhetaIcon from '../../assets/ampulheta.png'

import calculateIMC from '../../utils/calculateIMC'
import { useInfo } from '../../context/InfoProvider'

const ResultCard = ({ empty }) => {
  const [data, setData] = useState({})
  const { values } = useInfo()

  useEffect(() => {
    const imc = calculateIMC(values)
    setData(imc)
  }, [values.onClick])

  return (
    <>
      {empty
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

ResultCard.propTypes = {
  empty: PropTypes.bool
}

export default ResultCard
