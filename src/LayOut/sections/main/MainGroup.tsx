import ps from '../../../assets/images/header/Ps.svg'
import ae from '../../../assets/images/header/Ae.svg'
import ai from '../../../assets/images/header/Ai.svg'
import figma from '../../../assets/images/header/Figma.svg'
import { S } from './Main_Styles'

export const MainGroup = () => {
  return (
    <S.MainGroups>
      <div>
        <S.ImageWrapper>
          <S.Image src={ps}></S.Image>
        </S.ImageWrapper>
        <S.Name>Photoshop</S.Name>
      </div>
      <div>
        <S.ImageWrapper>
          <S.Image src={ae}></S.Image>
        </S.ImageWrapper>
        <S.Name>After Effects</S.Name>
      </div>
      <div>
        <S.ImageWrapper>
          <S.Image src={ai}></S.Image>
        </S.ImageWrapper>
        <S.Name>Illustrator</S.Name>
      </div>
      <div>
        <S.ImageWrapper>
          <S.Image src={figma}></S.Image>
        </S.ImageWrapper>
        <S.Name>Figma</S.Name>
      </div>
    </S.MainGroups>
  )
}
