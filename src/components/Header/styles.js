import styled from 'styled-components/native'
import { heightDP } from '../../utils/responsive'
import { colors } from '../../styles/global'

export const HeaderWrapper = styled.View`
  padding-top: ${heightDP('2.5%')};
  padding-bottom: ${heightDP('2.5%')};
  background-color: ${colors.blackColor};
  align-items: center;
`

export const HeaderTitle = styled.Text`
  font-size: ${heightDP('3%')};
  color: ${colors.whiteColor}
`
