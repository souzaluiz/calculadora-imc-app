import styled from 'styled-components/native'
import { colors } from '../../styles/global'

export const HeaderWrapper = styled.View`
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: ${colors.blackColor};
  align-items: center;
`

export const HeaderTitle = styled.Text`
  font-size: 20px;
  color: ${colors.whiteColor}
`
