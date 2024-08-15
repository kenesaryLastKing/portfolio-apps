import styled from 'styled-components'
import { theme } from '../../../../styles/Theme'
import { font } from '../../../../styles/Common'

const Project = styled.div`
  position: relative;

  img {
    @media ${theme.media.mobile} {
      border-radius: 16px;
      width: 163px;
      height: 238px;
    }
  }
`
const ProjectImageCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  width: 270px;
  height: 154px;
  background-color: #f9f9fc;

  position: absolute;
  bottom: 0;
  z-index: 9;

  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  box-shadow: 0px 2px 15px rgb(205, 205, 209);

  @media ${theme.media.mobile} {
    border-radius: 0 0 16px 16px;
    width: 163px;
    height: 93px;
  }

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 204px;

    @media ${theme.media.mobile} {
      max-width: 124px;
    }

    Button {
      width: 109px;
      height: 29px;
      margin: 0;

      @media ${theme.media.mobile} {
        border-radius: 7px;
        max-width: 66px;
        max-height: 17px;
      }

      ${font({
        family: '"Roboto", sans-serif',
        weight: 700,
        color: `${theme.colors.fontWhite}`,
        Fmax: 14,
        Fmin: 8,
      })}
    }
  }

  &:hover {
    background-color: ${theme.colors.primaryBG};
  }
`
const Title = styled.h3`
  width: 204px;

  @media ${theme.media.mobile} {
    padding-left: 20px;
  }

  ${font({
    family: '"Roboto", sans-serif',
    weight: 700,
    color: `${theme.colors.fontBlue}`,
    Fmax: 20,
    Fmin: 12,
  })}
`
const Link = styled.a`
  ${font({
    family: '"Roboto", sans-serif',
    weight: 400,
    color: `${theme.colors.fontBlue}`,
    Fmax: 14,
    Fmin: 8,
  })}
`
export const S = {
  Project,
  ProjectImageCover,
  Title,
  Link,
}
