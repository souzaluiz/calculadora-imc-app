import styled from 'styled-components/native'
import colors from '../../styles/colors'
import { heightDP, widthDP } from '../../utils/responsive'

export const CardWrapper = styled.View`
  height: ${heightDP(25)}px;
  padding-top: 10px;
  width: ${widthDP(96)}px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${colors.blackColor};
`

export const SmallText = styled.Text`
  color: ${({ color }) => color};
  font-size: ${heightDP(1.6)}px;
  text-transform: uppercase;
  font-family: 'PoppinsMedium';
`

export const LargText = styled.Text`
  color: ${({ color }) => color};
  font-size: ${heightDP(4)}px;
  text-transform: uppercase;
  font-family: 'PoppinsMedium';
`

export const MediumText = styled.Text`
  color: ${({ color }) => color};
  font-family: 'PoppinsMedium';
  text-transform: uppercase;
  font-size: ${heightDP(3.2)}px;
`

export const ImageLoading = styled.Image`
  height: ${heightDP(10)}px;
`
