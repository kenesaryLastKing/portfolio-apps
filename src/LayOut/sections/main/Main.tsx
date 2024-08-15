import { S } from './Main_Styles'
import { MainGroup } from './MainGroup'
import { MainCenter } from './MainCenter'
import { Container } from '../../../components/Container'

export const Main = () => {
  return (
    <S.Main>
      <Container>
        <S.LeftMain> {/*левый фиолетовый фон*/} </S.LeftMain>
        <MainCenter />
        <MainGroup />
      </Container>
    </S.Main>
  )
}
