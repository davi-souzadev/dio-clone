import { IButton } from './types'

import { ButtonContainer } from './styles'

export function Button({ title, variant="primary", onClick }: IButton) {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  )
}
