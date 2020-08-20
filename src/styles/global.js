import styled from 'styled-components/native'

export const colors = {
  primaryColor: '#0ABAA4',
  secondaryColor: '#D80945',
  whiteColor: '#FDFFFD',
  blackColor: '#00141B',
  backgroundColor: '#091D26'
}

export const AppWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.backgroundColor};
`
