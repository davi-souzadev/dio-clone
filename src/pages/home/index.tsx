import React from 'react'
import { useNavigate } from 'react-router-dom'

import dioBanner from '../../assets/dio-bg.png'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { 
  Container,
  TextContent,
  Title,
  TitleHighlight
} from './styles'

export function Home() {
  const navigate = useNavigate()

  function handleClickSignIn() {
    navigate('/login')
  }

  return (
    <>
      <Header/>
      <Container>
          <div>
            <Title>
              <TitleHighlight>
                Implemente
              </TitleHighlight>
              <br/>
              o seu futuro agora!
            </Title>
            <TextContent>
              Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
            </TextContent>
            <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} type="button"/>
          </div>
          <div>
            <img src={dioBanner} alt="Banner Principal" />
          </div>
      </Container>
    </>
  )
}
