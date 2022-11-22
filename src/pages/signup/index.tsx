import { MdEmail, MdLock, MdPerson } from "react-icons/md"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { IFormData } from "./types"
import { Column,
  Container,
  Title,
  TitleLogin,
  SubtitleLogin,
  SignUpText,
  Row, 
  Wrapper,
  CreateText
} from "./styles"

import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from "../../services/api"

const schema = yup.object({
  name: yup.string(),
  email: yup.string().email('Email não é válido').required('Campo obrigatório!'),
  password: yup.string().min(3, 'Mínimo de 3 caracteres').required('Campo obrigatório!'),
}).required();



export function SignUp() {
  const navigate = useNavigate()

  const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  console.log(isValid, errors)
  async function onSubmit(formData : IFormData) {
    try {
      const { data } = await api.post('/users', {
        name: formData.name,
        email: formData.email,
        password: formData.password
      })
      console.log('retorno api', data)

      if(data) {
        navigate('/feed')
        return
      }
    } catch(error) {
      console.log(error)
    }
  }

  function handleNavigateLogin() {
    navigate('/login')
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
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="fullname"
                control={control}
                errorMessage={errors?.name?.message}
                placeholder="Nome Completo" 
                leftIcon={<MdPerson/>}
              />
              <Input
                name="email"
                control={control}
                errorMessage={errors?.email?.message}
                placeholder="E-mail" 
                type="email"
                leftIcon={<MdEmail/>}
              />
              <Input
                name="password"
                control={control}
                errorMessage={errors?.password?.message}
                placeholder="Password" 
                type="password"
                leftIcon={<MdLock/>}
              />
              <Button title="Criar minha conta" variant="secondary" type="submit"/>
            </form>
            <Row>
              <SignUpText>
                Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
              </SignUpText>
            </Row>
            <Row>
              <CreateText><span>Já tenho conta.</span><a onClick={handleNavigateLogin}>Fazer Login</a></CreateText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}