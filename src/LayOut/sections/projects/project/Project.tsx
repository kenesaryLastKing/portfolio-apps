import { Button } from '../../../../components/Button'
import { S } from './Project_Styles'

type ProjectPropsType = {
  src: string
}

export const Project = (props: ProjectPropsType) => {
  return (
    <>
      <S.Project>
        <img src={props.src} alt="story motion" />
        <S.ProjectImageCover>
          <S.Title>Story motion for sale English cources</S.Title>
          <span>
            <Button>Edit for you</Button>
            <S.Link href="">see preview</S.Link>
          </span>
        </S.ProjectImageCover>
      </S.Project>
    </>
  )
}
