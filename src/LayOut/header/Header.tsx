import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'
import { FlexWrapper } from '../../components/FlexWrapper'
import React from 'react'
import { S } from './Header_Styles'

const items = ['Home', 'Projects', 'About', 'Content']

export const Header: React.FC = () => {
  return (
    <S.Header>
      <FlexWrapper align={'center'} justify={'space-between'}>
        <Logo />
        <Menu menuItems={items} />
      </FlexWrapper>
    </S.Header>
  )
}
