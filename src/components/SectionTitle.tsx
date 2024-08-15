import styled from 'styled-components'
import ellipseImg from '../assets/images/Ellipse 9.svg'
import { font } from '../styles/Common'

type SectionPropsType = {
  title: string
}

export const SectionTitle = (props: SectionPropsType) => {
  return (
    <SectionTitles>
      <Title>{props.title}</Title>
      <img src={ellipseImg} alt="" />
    </SectionTitles>
  )
}

const SectionTitles = styled.div`
  text-align: center;
  font-size: 32px;
  img {
    margin-bottom: 34px;
  }
`
const Title = styled.h2`
  margin-bottom: 5px;

  ${font({ family: "'Roboto', sans-serif", weight: 600, Fmax: 32, Fmin: 19 })}
`
