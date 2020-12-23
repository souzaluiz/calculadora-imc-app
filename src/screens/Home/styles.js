import styled from 'styled-components/native'
import { widthDP, heightDP } from '../../utils/responsive'
import colors from '../../styles/colors'

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${colors.backgroundColor};
`

export const Cards = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  padding: ${heightDP(2)}px 0;
`

export const Button = styled.TouchableOpacity`
  background-color: ${colors.primaryColor};
  margin-top: ${heightDP(2)}px;
  height: ${heightDP(7)}px;
  width: ${widthDP(96)}px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`

Button.Text = styled.Text`
  font-family: 'PoppinsMedium';
  color: ${colors.blackColor};
  font-size: ${heightDP(2.5)}px;
`
