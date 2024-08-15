import { Learn } from './learn/Learn'
import { SectionTitle } from '../../../components/SectionTitle'
import learningVideo from '../../../assets/images/learning/learning.png'
import { Container } from '../../../components/Container'
import { S } from './Learning_Styles'
import React from 'react'

export const Learning: React.FC = () => {
  return (
    <S.Learning>
      <Container>
        <SectionTitle title={'Learning'} />
        <Learn title={'After Effects & Photoshop'} src={learningVideo} />
        <Learn title={'Website , Html & cSS'} src={learningVideo} />
      </Container>
    </S.Learning>
  )
}
