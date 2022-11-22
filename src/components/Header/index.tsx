import React from 'react'
import { Button } from '../Button'
import { IAuthenticated } from './types'
import { useNavigate } from 'react-router-dom'

import logo from '../../assets/logo-dio.svg'

import {
  Container,
  Row,
  Wrapper,
  SearchInputContainer,
  Menu,
  MenuRight,
  Input,
  UserPicture
} from './styles'

export function Header({ authenticated }: IAuthenticated) {
  const navigate = useNavigate()

  function handleNavigateLogin() {
    navigate('/login')
  }

  function handleNavigateSignUp() {
    navigate('/signup')
  }

  function handleNavigateHome() {
    navigate('/')
  }

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" />
          {authenticated &&
            <>
              <SearchInputContainer>
                <Input placeholder="Buscar..."/>
              </SearchInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          }
        </Row>
        <Row>
          { authenticated ?
            <UserPicture src="https://github.com/davi-souzadev.png"/>
            :
            <>
              <MenuRight onClick={handleNavigateHome}>Home</MenuRight>
              <Button title="Entrar" onClick={handleNavigateLogin}/>
              <Button title="Cadastrar" onClick={handleNavigateSignUp}/>
            </>
          }

          
        </Row>
      </Container>
    </Wrapper>
  )
}
