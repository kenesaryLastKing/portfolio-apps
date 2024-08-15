import styled from 'styled-components'
import { theme } from '../../styles/Theme'

const Menu = styled.nav`
  ul {
    display: flex;
    gap: 58px;
    align-items: center;
    @media ${theme.media.mobile} {
      font-size: 8px;
      gap: 30px;
    }
  }
  a {
    color: #393939;
  }
`

export const S = {
  Menu,
}
