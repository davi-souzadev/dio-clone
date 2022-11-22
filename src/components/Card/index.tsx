import { FiThumbsUp } from 'react-icons/fi'

import { 
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture
} from './styles'

export function Card() {
  return (
    <CardContainer>
      <ImageBackground src="https://venturebeat.com/wp-content/uploads/2021/05/GettyImages-1291886933-e1624308433688.jpg?fit=2309%2C1154&strip=all"/>
      <Content>
        <UserInfo>
          <UserPicture src="https://github.com/davi-souzadev.png"/>
          <div>
            <h4>Davi de Souza</h4>
            <p>Há 10 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>Projeto feito para o curso de HTML e CSS no bootcamp dio OrangeTech+</p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}
