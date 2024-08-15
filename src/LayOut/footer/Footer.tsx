import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Icon } from '../../components/icon/Icon'
import { theme } from '../../styles/Theme'
import wave from '../../assets/images/wave.svg'
export const Footer = () => {
  return (
    <StyledFooter>
      <SocialWrapper>
        <SocialItem>
          <SocialIcons>
            <Icon
              width="33"
              height="33"
              viewBox="0 0 33 33"
              iconId={'intagram01'}
            />
          </SocialIcons>
        </SocialItem>
        <SocialItem>
          <SocialIcons>
            <Icon
              width="33"
              height="33"
              viewBox="0 0 33 33"
              iconId={'whatsup'}
            />
          </SocialIcons>
        </SocialItem>
        <SocialItem>
          <SocialIcons>
            <Icon
              width="33"
              height="33"
              viewBox="0 0 33 33"
              iconId={'telegram01'}
            />
          </SocialIcons>
        </SocialItem>
      </SocialWrapper>

      <SocialList>
        <SocialItem>
          <SocialIcons>
            <Icon
              width="33"
              height="33"
              viewBox="0 0 33 33"
              iconId={'instagram'}
            />
          </SocialIcons>
        </SocialItem>
        <SocialItem>
          <SocialIcons>
            <Icon
              width="33"
              height="33"
              viewBox="0 0 33 33"
              iconId={'whatsap'}
            />
          </SocialIcons>
        </SocialItem>
        <SocialItem>
          <SocialIcons>
            <Icon
              width="33"
              height="33"
              viewBox="0 0 33 33"
              iconId={'telegram'}
            />
          </SocialIcons>
        </SocialItem>
      </SocialList>
      <img src={wave} alt="" style={{ marginBottom: '-1px' }} />
      <FooterInfo>
        <Name>Coded by Amanbay Kenesary</Name>
        <p>All Rights Reserved 2024</p>
      </FooterInfo>
    </StyledFooter>
  )
}

const SocialWrapper = styled.ul`
  display: flex;
  justify-content: center;
  li:nth-child(2) {
    margin: 0 22px;
  }
`
const StyledFooter = styled.section`
  padding: 0;
  display: flex;
  flex-direction: column;
`
const SocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #a5bbf8;
  height: 201px;
  width: 61px;

  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;

  li:nth-child(2) {
    margin: 17px 0;
  }
`
const SocialItem = styled.li``
const SocialIcons = styled.a``
const FooterInfo = styled.small`
  background-color: ${theme.colors.primaryBG};
  color: ${theme.colors.fontWhite};

  padding-bottom: 73px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 11px;
  }
`
const Name = styled.span`
  font-weight: 700;
  font-size: 17px;
`
