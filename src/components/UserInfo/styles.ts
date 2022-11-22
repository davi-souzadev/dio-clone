import styled from 'styled-components';
import { IStyledPercentual } from './types';

export const Container = styled.div`
  display:flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
` 

export const UserPicture = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 1.375rem;
  border: 3px solid #FFFFFF;
  margin-right: .75rem;
`

export const NameText = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: #FFFFFF;
` 

export const Progress = styled.div<IStyledPercentual>`
  width: 11.25rem;
  height: .375rem;
  background-color: #FFFFFF;
  border-radius: .1875rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({percentual}) => percentual}%;
    height: .375rem;
    border-radius: .1875rem;
    background-color: #23DD7A;
  }
`