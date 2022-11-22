import React from 'react'

import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { UserInfo } from '../../components/UserInfo'
import { 
  Container,
  Column,
  Title,
  TitleHighlight
} from './styles'

export function Feed() {
  return (
    <>
      <Header authenticated={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
        </Column>
        
        <Column flex={1}>
          <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo percentual={75} name="Davi de Souza" image="https://github.com/davi-souzadev.png" />
          <UserInfo percentual={57} name="John Doe" image="https://i.pravatar.cc/300" />
          <UserInfo percentual={50} name="Matheus Silva" image="https://i.pravatar.cc/300" />
          <UserInfo percentual={43} name="Rafael Guimarães" image="https://i.pravatar.cc/300" />
          <UserInfo percentual={33} name="João da Silva" image="https://i.pravatar.cc/300" />
        </Column>
      </Container>
    </>
  )
}