import lustraImage from '../../../../assets/images/project/Rectangle 2.png'
import bGirlImage from '../../../../assets/images/project/blackgirl.png'
import girlImage from '../../../../assets/images/project/girl.png'
import mountainImage from '../../../../assets/images/project/mountain.png'
import styled from 'styled-components'
import { Project } from '../project/Project'
import { theme } from '../../../../styles/Theme'

const ProjectsData = [
  { src: `${lustraImage}` },
  { src: `${bGirlImage}` },
  { src: `${mountainImage}` },
  { src: `${girlImage}` },
]

export const SlyderProject = () => {
  return (
    <ProjectSlyders>
      {ProjectsData.map((item) => (
        <Project src={item.src} />
      ))}
    </ProjectSlyders>
  )
}

const ProjectSlyders = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 38px;

  margin-top: 40px;

  @media ${theme.media.mobile} {
    border-radius: 16px;
    max-width: 163px;
    max-height: 238px;
  }
`
