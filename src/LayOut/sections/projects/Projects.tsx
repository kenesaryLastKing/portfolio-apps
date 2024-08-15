import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { TapProject } from './tapProject/TapProject'
import { Project } from './project/Project'
import { Icon } from '../../../components/icon/Icon'
import { SlyderProject } from './slyderProject/SliderProject'

const projectsItems = ['Story', 'Post', 'Banner', 'Trailer', 'Desighn', 'More']

export const Projects = () => {
  return (
    <>
      <StyledProjects>
        <SectionTitle title={'Projects'} />
        <TapProject projectItems={projectsItems} />
        <SlyderProject />
        <SlyderProject />
        <DotsProject>
          <Icon width="413" height="505" viewBox="0 0 413 505" iconId="dots" />
        </DotsProject>
        <PlusProject>
          <Icon
            width="383"
            height="347"
            viewBox="0 0 383 347"
            iconId="plusProject"
          />
        </PlusProject>
      </StyledProjects>
    </>
  )
}

const StyledProjects = styled.section`
  min-height: 100vh;
  position: relative;
  z-index: 7;
  padding-bottom: 0;
`
const DotsProject = styled.div`
  position: absolute;
  top: 120px;
  left: 10px;
  z-index: -1;
`
const PlusProject = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: -1;
`
