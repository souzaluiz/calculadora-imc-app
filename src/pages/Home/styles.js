import styled from 'styled-components/native'
import { widthDP, heightDP } from '../../utils/responsive'
import { colors } from '../../styles/global'

export const CardsContainer = styled.View`
  align-items: center;
`
export const ButtonCalculate = styled.TouchableOpacity`
  background-color: ${colors.primaryColor};
  margin-top: ${heightDP(3)}px;
  height: ${heightDP(6)}px;
  width: ${widthDP('90%')}px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`

ButtonCalculate.Text = styled.Text`
  font-family: 'PoppinsMedium';
  font-size: ${heightDP('2.5%')}px;
`
