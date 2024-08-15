import styled from 'styled-components'
import { theme } from '../../styles/Theme'

const Header = styled.header`
  position: relative;
  top: 33px;
  z-index: 9;
  padding: 0px 15px 0px 40px;
  max-height: 79px;
  max-width: 1362px;

  @media ${theme.media.tablet} {
    top: 0;
    background-color: #fff;
  }
`
export const S = {
  Header,
}
