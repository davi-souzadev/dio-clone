import React from 'react'
import { IUserInfo } from './types'

import {
  Container,
  NameText,
  Progress,
  UserPicture
} from './styles'

export function UserInfo({ name, image, percentual }: IUserInfo) {
  return (
    <Container>
      <UserPicture src={image}/>
      <div>
        <NameText>{name}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  )
}
