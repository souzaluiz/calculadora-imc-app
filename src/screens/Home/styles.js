import styled from 'styled-components/native'
import { heightDP } from '../../utils/responsive'
import colors from '../../styles/colors'
import { theme } from '../../theme'

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${colors.backgroundColor};
`

export const Cards = styled.View`
  flex: 1;
  padding: ${theme.spacing.small}px;
  justify-content: space-evenly;
`

export const Button = styled.TouchableOpacity`
  background-color: ${colors.primaryColor};
  margin-top: ${heightDP(2)}px;
  height: ${heightDP(7)}px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`

Button.Text = styled.Text`
  font-family: 'PoppinsMedium';
  color: ${colors.blackColor};
  font-size: ${heightDP(2.5)}px;
`
