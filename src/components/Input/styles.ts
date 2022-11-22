import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  max-width: 17.188rem;
  height: 1.875rem;
  border-bottom: 1px solid #3b3450;

  display: flex;
  align-items: center;
  margin-bottom: 1.875rem;
`

export const IconContainer = styled.div`
  margin-right: .625rem;
`

export const InputText = styled.input`
  background-color: transparent;
  color: #fff;
  width: 100%;
  border: 0;
  height: 1.875rem;
`

export const ErrorText = styled.p`
  margin: -1.75rem 1rem 1rem;
  font-size: .75rem;
  color: #ff0035;
`