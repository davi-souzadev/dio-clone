import React from 'react'
import { Controller } from 'react-hook-form'
import { IInput } from './types'

import {
  IconContainer,
  InputContainer,
  InputText,
  ErrorText
} from './styles'

export function Input({ leftIcon, name, control, errorMessage, ...rest }: IInput) {
  return (
    <>
      <InputContainer>
      {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) =>  <InputText value={value} onChange={onChange} {...rest} />}
      />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}
