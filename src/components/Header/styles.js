import styled from 'styled-components/native'
import { heightDP, widthDP } from '../../utils/responsive'
import colors from '../../styles/colors'
import ClearIcon from '../../assets/rubber.svg'

export const Wrapper = styled.View`
  padding-top: ${heightDP(2)}px;
  padding-bottom: ${heightDP(2)}px;
  background-color: ${colors.blackColor};
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.Text`
  font-size: ${heightDP(3)}px;
  color: ${colors.whiteColor};
  font-family: 'PoppinsRegular';
`

export const Button = styled.TouchableOpacity`
  margin-left: ${widthDP(3)}px;
  margin-right: ${widthDP(4)}px;
`

Button.Icon = styled(ClearIcon).attrs(({
  fill: '#FFF',
  width: widthDP(7),
  height: heightDP(7)
}))``

export const Void = styled.View`
  width: 20px;
  height: 20px;
  margin-left: ${widthDP(4)}px;
  margin-right: ${widthDP(3)}px;
`
