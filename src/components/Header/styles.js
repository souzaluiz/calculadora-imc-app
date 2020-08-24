import styled from 'styled-components/native'
import { heightDP } from '../../utils/responsive'
import { colors } from '../../styles/global'

export const HeaderWrapper = styled.View`
  padding-top: ${heightDP('2.5%')}px;
  padding-bottom: ${heightDP('2.5%')}px;
  background-color: ${colors.blackColor};
  align-items: center;
`

export const HeaderTitle = styled.Text`
  font-size: ${heightDP('3%')}px;
  color: ${colors.whiteColor};
  font-family: 'PoppinsRegular';
`
