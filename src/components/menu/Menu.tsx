import { S } from './Menu_Styles'
import moon from '../../assets/images/header/moon.svg'

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <S.Menu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          )
        })}
        <img src={moon} alt="moon" />
      </ul>
    </S.Menu>
  )
}
