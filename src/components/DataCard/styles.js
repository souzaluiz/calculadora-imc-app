import styled from 'styled-components/native'

import { widthDP, heightDP } from '../../utils/responsive'
import { colors } from '../../styles/global'

export const CardWrapper = styled.View`
  background-color: ${colors.blackColor};
  margin-top: ${heightDP('1.5%')}px;
  width: ${widthDP('96%')}px;
  padding-top: ${heightDP('2%')}px;
  padding-bottom: ${heightDP('2%')}px;
  align-items: center;
  border-radius: 8px;
`

export const Card = {}

Card.Title = styled.Text`
  color: ${colors.whiteColor};
  font-family: 'PoppinsRegular';
  font-size: ${heightDP(2)}px;
  text-align: center;
`

Card.Value = styled.Text`
  color: ${colors.whiteColor};
  margin-top: 5px;
  font-family: 'PoppinsRegular';
  font-size: ${heightDP(5.5)}px;
  text-align: center;
`

export const ButtonsWrapper = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: space-around;
  margin-top: ${heightDP(1)};
  margin-bottom: ${heightDP(1.5)};
`

export const Button = styled.TouchableOpacity`
  background-color: ${colors.primaryColor};
  width: 40%;
  height: ${heightDP(5)};
  border-radius: 3;
  align-items: center;
  justify-content: center;
`

Button.Image = styled.Image`
  width: ${widthDP(5)};
`
