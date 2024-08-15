import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'
import locationImg from '../../../assets/images/contacts/location.svg'
import emailImg from '../../../assets/images/contacts/email.svg'
import telephoneImg from '../../../assets/images/contacts/telephone (1).svg'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'
import { font } from '../../../styles/Common'

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle title={'Contact Us'} />
        <ContactsWrapper>
          <ContactsFormWrapper>
            <Title>Get in touch</Title>
            <StyledForm>
              <div>
                <Field placeholder={'e-mail'} />
                <Field placeholder={'Phone'} />
              </div>
              <FormField placeholder={'Message'} as={'textarea'} />
            </StyledForm>
            <Button type={'submit'}>Send</Button>
          </ContactsFormWrapper>
          <ContactsSocialWrapper>
            <ContactsSocialGroup>
              <Image src={locationImg}></Image>
              <div>
                <Headers>Location</Headers>
                <Paragraph>Astana/Kazakhstan</Paragraph>
              </div>
            </ContactsSocialGroup>
            <ContactsSocialGroup>
              <Image src={telephoneImg}></Image>
              <div>
                <Headers>Phone</Headers>
                <Paragraph>+77762763915</Paragraph>
              </div>
            </ContactsSocialGroup>
            <ContactsSocialGroup>
              <Image src={emailImg}></Image>
              <div>
                <Headers>Email</Headers>
                <Paragraph>koni9812@gmail.com</Paragraph>
              </div>
            </ContactsSocialGroup>
          </ContactsSocialWrapper>
        </ContactsWrapper>
      </Container>
    </StyledContacts>
  )
}

const StyledContacts = styled.section``
const ContactsFormWrapper = styled.div`
  max-width: 593px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${theme.media.tablet} {
    width: 593px;
    height: 462px;
    padding: 0 81px;
    box-shadow: 0px 15px 29px rgba(0, 0, 0, 0.05);
  }

  @media ${theme.media.mobile} {
    width: 363px;
    height: 362px;
    padding: 33px 50px 77px;
  }
`
const ContactsSocialWrapper = styled.div`
  width: 181px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${theme.media.tablet} {
    align-items: center;
    width: 593px;
    height: 501px;
    box-shadow: 0px 15px 29px rgba(0, 0, 0, 0.05);
  }

  @mdeia ${theme.media.mobile} {
    width: 593px;
    height: 301px;
  }
`
const ContactsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  max-width: 932px;
  height: 462px;

  margin: 0 auto;
  box-shadow: 0px 15px 29px rgba(0, 0, 0, 0.05);

  Button {
    width: 117px;
    height: 43px;
    border-radius: 9px;
  }

  @media ${theme.media.tablet} {
    box-shadow: none;
    height: 1000px;
  }
`
const Field = styled.input`
  max-width: 211px;
  width: 100%;
  height: 36px;
  margin-bottom: 11px;
  border: none;
  border-radius: 9px;
  background-color: #f5f5f5;
  padding: 23px 17px;

  &::placeholder {
    color: #a5a5a5;
  }

  :first-child {
    margin-right: 7px;
  }
  @media ${theme.media.mobile} {
    border-radius: 6px;
    width: 129px;
    height: 22px;
  }
`
const StyledForm = styled.form`
  max-width: 430px;
  display: flex;
  flex-direction: column;

  gap: 10px;

  div {
    display: flex;
  }
`
const ContactsSocialGroup = styled.div`
  display: flex;

  margin-bottom: 36px;

  @media ${theme.media.tablet} {
    width: 315px;
  }

  @media ${theme.media.mobile} {
    width: 180px;
  }
`
const Title = styled.h3`
  margin: 53px 0 23px;
  display: flex;
  justify-content: flex-end;

  ${font({
    family: "'Roboto', sans-serif",
    weight: 500,
    Fmax: 36,
    Fmin: 22,
  })};

  @media ${theme.media.mobile} {
    margin-top: 0;
  }
`
const Image = styled.img`
  width: 38px;
  height: 38px;
  margin-right: 26px;

  @media ${theme.media.tablet} {
    width: 72px;
    height: 72px;
  }

  @media ${theme.media.mobile} {
    width: 44px;
    height: 44px;
  }
`
const Paragraph = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 136%;
  color: #8b8b8b;

  @media ${theme.media.tablet} {
    font-size: 22px;
  }

  @media ${theme.media.mobile} {
    font-size: 14px;
  }
`
const Headers = styled.h3`
  margin: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 136%;

  @media ${theme.media.tablet} {
    font-size: 30px;
  }

  @media ${theme.media.mobile} {
    font-size: 18px;
  }
`
const FormField = styled.textarea`
  max-width: 429px;
  width: 100%;
  height: 152px;
  resize: none;
  text-transform: capitalize;
  margin-bottom: 11px;
  border: none;
  border-radius: 9px;
  background-color: #f5f5f5;
  padding: 23px 17px;

  @media ${theme.media.mobile} {
    border-radius: 6px;
    width: 262px;
    height: 93px;
  }
`
