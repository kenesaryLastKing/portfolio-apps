import { Icon } from '../icon/Icon'
import logo from '../../assets/images/header/log.svg'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'

export const Logo = () => {
  return (
    <>
      <a href="#">
        <Image src={logo}></Image>
      </a>
    </>
  )
}

const Image = styled.img`
  @media ${theme.media.tablet} {
    background-color: ${theme.colors.secondBG};
  }

  @media ${theme.media.mobile} {
    width: 37px;
    height: 37px;
  }
`
