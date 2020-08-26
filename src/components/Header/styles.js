import styled from 'styled-components/native'
import { heightDP, widthDP } from '../../utils/responsive'
import colors from '../../styles/colors'

export const HeaderWrapper = styled.View`
  padding-top: ${heightDP('2.5%')}px;
  padding-bottom: ${heightDP('2.5%')}px;
  background-color: ${colors.blackColor};
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const HeaderTitle = styled.Text`
  font-size: ${heightDP('3%')}px;
  color: ${colors.whiteColor};
  font-family: 'PoppinsRegular';
`

export const HeaderButton = styled.TouchableOpacity`
  margin-left: ${widthDP(3)}px;
  margin-right: ${widthDP(4)}px;
`

export const HeaderButtonIcon = styled.Image`
  height: ${heightDP(5)}px;
`

export const HeaderBoxVoid = styled.View`
  width: 20px;
  height: 20px;
  margin-left: ${widthDP(4)}px;
  margin-right: ${widthDP(3)}px;
`
