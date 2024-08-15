import styled from 'styled-components'
import { theme } from '../../../styles/Theme'
import { font } from '../../../styles/Common'

//Main
const Main = styled.section`
  min-height: 946px;
  display: flex;
  flex-wrap: wrap;
`
const LeftMain = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 468px;
  height: 900px;
  background-color: ${theme.colors.primaryBG};

  @media ${theme.media.tablet} {
    max-width: 384px;
    max-height: 1060px;
  }
  @media ${theme.media.mobile} {
    max-width: 212px;
    max-height: 703spx;
  }
`
//MainCenter
const MainCenters = styled.div`
  position: relative;
  z-index: 9;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  margin: 0 auto;
  max-width: 1158px;
  height: 507px;

  background: linear-gradient(
    135deg,
    rgba(166, 188, 250, 0.5),
    rgba(166, 188, 250, 0.05)
  );
  backdrop-filter: blur(7px);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 200px 0;

  @media ${theme.media.tablet} {
    max-width: 590px;
    max-height: 845px;

    border-radius: 200px 0;
    margin-bottom: ;
  }
  @media ${theme.media.mobile} {
    border-radius: 112px 0;
    max-width: 330px;
    max-height: 474px;
  }
`
const MainPhoto = styled.img`
  border-radius: 50%;
  border: 25px solid #fff;
  width: 401px;
  height: 401px;

  @media ${theme.media.tablet} {
    max-width: 334px;
    max-height: 334px;
  }
  @media ${theme.media.mobile} {
    max-width: 187px;
    max-height: 187px;
    border: 14 3px solid #fff;
  }
`
const MainText = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 326px;

  p {
    display: none;
  }

  ${font({
    family: "'Roboto', sans-serif",
    weight: 500,
    Fmax: 25,
    Fmin: 11,
  })};
`
const MainItem = styled.div`
  h1 {
    ${font({
      family: "'Roboto', sans-serif",
      weight: 700,
      Fmax: 60,
      Fmin: 33,
    })};
  }
  span {
    color: #2157f2;
  }
  a {
    color: #6c92ff;
  }
  width: 422px;
`
const MainButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  button {
    width: 200px;
  }

  a {
    @media ${theme.media.mobile} {
      max-width: 112px;
      max-height: 30px;
    }
  }
`
const MainIconPlus = styled.div`
  position: absolute;
  top: 107px;
  left: 600px;
  z-index: -1;
  @media ${theme.media.tablet} {
    top: 62px;
    left: 532px;
  }
  @media ${theme.media.mobile} {
    top: 37px;
    left: 278px;
  }
`
const MainIconCircle = styled.div`
  position: absolute;
  bottom: 200px;
  right: 200px;
  z-index: -1;
`
//MainGroup
const MainGroups = styled.div`
  display: flex;
  justify-content: right;
  flex-wrap: wrap;
  gap: 13px;

  margin-top: 40px;

  @media ${theme.media.tablet} {
    margin-top: 360px;
    justify-content: center;
  }
`
const Image = styled.img`
  margin: 0 43px;
  min-width: 75px;
  min-height: 75px;

  @media ${theme.media.tablet} {
    max-width: 93px;
    max-height: 93px;
  }
`
const ImageWrapper = styled.div`
  margin-bottom: -30px;
`
const Name = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
  background-color: #a6bcfa;
  height: 91px;
  width: 161px;
  border-radius: 24px;

  @media ${theme.media.tablet} {
    max-width: 271px;
    max-height: 153px;
  }
`
export const S = {
  Main,
  LeftMain,
  MainCenters,
  MainPhoto,
  MainText,
  MainItem,
  MainButtonWrapper,
  MainIconPlus,
  MainIconCircle,
  MainGroups,
  Image,
  ImageWrapper,
  Name,
}
