import styled from 'styled-components'
import { SectionTitle } from './../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Icon } from '../../../components/icon/Icon'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'
import { font } from '../../../styles/Common'
import play from '../../../assets/images/services/play.png'
import pen from '../../../assets/images/services/pen.png'
import book from '../../../assets/images/services/book.png'
import arrow from '../../../assets/images/services/arrow.png'

export const Services = () => {
  return (
    <StyledServices>
      <SectionTitle title="Services" />
      <Container>
        <FlexWrapper justify={'space-evenly'} wrap={'wrap'}>
          <ServiceCard>
            <IconService>
              <Image src={play} />
              <Title>
                Video Edit <br />
                Service
              </Title>
              <a href="#">
                View More
                <ArrowImg src={arrow} />
              </a>
            </IconService>
          </ServiceCard>
          <ServiceCard>
            <IconService>
              <Image src={pen} />
              <Title>
                Ui/Ux <br /> Designer
              </Title>
              <a href="#">
                View More
                <ArrowImg src={arrow} />
              </a>
            </IconService>
          </ServiceCard>
          <ServiceCard>
            <IconService>
              <Image src={book} />
              <Title>
                Website <br />
                Developer
              </Title>
              <a href="#">
                View More
                <ArrowImg src={arrow} />
              </a>
            </IconService>
          </ServiceCard>
        </FlexWrapper>
      </Container>
    </StyledServices>
  )
}

const StyledServices = styled.section``
const ServiceCard = styled.div`
  width: 334px;
  height: 402px;
  box-shadow: 0px 15px 29px rgba(0, 0, 0, 0.05);
  padding-left: 57px;

  @media ${theme.media.tablet} {
    max-width: 280px;
    max-height: 337px;
    padding-left: 50px;
  }

  @media ${theme.media.mobile} {
    max-width: 155px;
    max-height: 187px;
    padding-left: 30px;
  }
`
const IconService = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 110px;

  @media ${theme.media.tablet} {
    margin-top: 95px;
    }
    @media ${theme.media.mobile} {
    margin-top: 55px;
    }

  a {
    display: flex;
    justify-content: space-between;
    width: 108px;  
    color: #2157f2;

    @media ${theme.media.tablet} {
      font-size: 13px;
      
    };
    @media ${theme.media.mobile} {
      font-size: 7px;
      max-width: 50px;  

    };
    }

  Icon {
  @media ${theme.media.mobile} {
  width: 35px;
  height: 35px;
  }
  }
}
`
const Title = styled.h2`
  font-size: 32px;
  margin-top: 24px;
  margin-bottom: 31px;

  @media ${theme.media.tablet} {
    margin-top: 20px;
    margin-bottom: 35px;
  }

  @media ${theme.media.mobile} {
    margin-top: 15px;
    margin-bottom: 14px;
  }

  ${font({ family: "'Roboto', sans-serif", weight: 500, Fmax: 32, Fmin: 14 })}
`
const Image = styled.img`
  width: 74px;
  height: 74px;

  @media ${theme.media.tablet} {
    width: 62px;
    height: 62px;
  }

  @media ${theme.media.mobile} {
    width: 34px;
    height: 34px;
  }
`

const ArrowImg = styled.img`
  width: 21px;
  height: 21px;

  @media ${theme.media.tablet} {
    width: 18px;
    height: 18px;
  }

  @media ${theme.media.mobile} {
    width: 10px;
    height: 10px;
  }
`
