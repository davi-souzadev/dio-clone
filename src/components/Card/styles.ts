import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  background-color: #3B4651;
  position: relative;
  margin-bottom: 1.5rem;
`

export const ImageBackground = styled.img`
  width: 100%;
  height: 11.25rem;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: .75rem;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: .75rem;
  div {
    margin-left: .75rem;
  }
  h4{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.5625rem;
    color: #FFFFFF;
  }
  p {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: .75rem;
    line-height: 1rem;
    color: #FFFFFF;
  }
`

export const UserPicture = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 1.375rem;
  border: 3px solid #FFFFFF;
`

export const PostInfo = styled.div`
    margin-bottom: .75rem;

    h4{
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.5625rem;
      color: #FFFFFF;
    }
    p {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: .75rem;
      line-height: 1rem;
    }
`

export const HasInfo = styled.div`
  margin-top: .75rem;
  h4{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: .75rem;
    line-height: 1rem;    
    color: #FFFFFF80  
  }
  p {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.375rem;
  }
`