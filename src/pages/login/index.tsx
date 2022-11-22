import React from 'react'
import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { IFormData } from './types';
import { api } from '../../services/api'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { 
  Container,
  Title,
  Column,
  ForgotText,
  Row,
  SubtitleLogin,
  TitleLogin,
  Wrapper,
  CreateText
} from './styles'

const schema = yup.object({
  email: yup.string().email('Email não é válido').required('Campo obrigatório!'),
  password: yup.string().min(3, 'Mínimo de 3 caracteres').required('Campo obrigatório!'),
}).required();

export function Login() {

  const navigate = useNavigate()
  

  const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
});

  console.log(isValid, errors)
  const onSubmit = async (formData: IFormData) => {
    try {
      const { data } = await api.get(`users?email=${formData.email}&password = ${formData.password}`)
      console.log('retorno api', data)
      if(data) {
        navigate('/feed')
      }
    } catch(error) {
      console.error(error)
    }
  };
  
  function handleNavigateSignUp() {
    navigate('/signup')
  }

  return (
    <>
      <Header/>
      <Container>
          <Column>
            <Title>
              A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
          </Column>
          <Column>
            <Wrapper>
              <TitleLogin>Faça seu Login</TitleLogin>
              <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Input
                    name="email"
                    control={control}
                    errorMessage={errors?.email?.message}
                    placeholder="Email" 
                    type="email"
                    leftIcon={<MdEmail/>}
                  />
                  <Input
                    name="password"
                    control={control}
                    errorMessage={errors?.password?.message}
                    placeholder="Senha" 
                    type="password"
                    leftIcon={<MdLock/>}
                  />
                  <Button title="Entrar" variant="secondary" type="button"/>
                </form>
                <Row>
                  <ForgotText>Esqueci minha senha</ForgotText>
                  <CreateText onClick={handleNavigateSignUp}>Criar conta</CreateText>
                </Row>
              </Wrapper>
          </Column>
      </Container>
    </>
  )
}
