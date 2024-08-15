import styled from 'styled-components'
import { theme } from '../../../../styles/Theme'

export const TapProject = (props: { projectItems: Array<string> }) => {
  return (
    <>
      <StyledTapProject>
        <ul>
          {props.projectItems.map((item, index) => {
            return (
              <li key={index}>
                <a href="#">{item}</a>
              </li>
            )
          })}
        </ul>
      </StyledTapProject>
    </>
  )
}

const StyledTapProject = styled.nav`
  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 41px;

    position: relative;
    z-index: 999;

    li {
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: #f8faff;
      width: 159px;
      height: 42px;
      border: 3px solid #a6bcfa;
      border-radius: 67px;

      &:hover {
        background-color: ${theme.colors.primaryBG};
      }

      a {
        color: #1f1f1f;
      }
    }
  }
`
