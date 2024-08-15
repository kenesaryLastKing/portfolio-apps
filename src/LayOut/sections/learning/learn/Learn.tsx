import React from 'react'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import { S } from '../Learning_Styles'

type LearnPropsType = {
  title: string
  src?: string
}

export const Learn: React.FC<LearnPropsType> = (props: LearnPropsType) => {
  return (
    <S.Learn>
      <S.LearnTitle>{props.title}</S.LearnTitle>
      <FlexWrapper>
        <S.Image src={props.src} alt="#" />
        <S.Image src={props.src} alt="#" />
        <S.Image src={props.src} alt="#" />
        <S.Image src={props.src} alt="#" />
        <S.Image src={props.src} alt="#" />
      </FlexWrapper>
    </S.Learn>
  )
}
