import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 7.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Wrapper = styled.div`
  max-width: 18.75rem;
`

export const Column = styled.div`
  flex: 1;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.25rem;
`

export const Title = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  width: 20rem;
  margin-bottom: 1.25rem;
  line-height: 2.75rem;
  color: #fff;
`
export const TitleLogin = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1.25rem;
  line-height: 2.75rem;
`

export const SubtitleLogin = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 1.125rem;
  margin-bottom: 2.188rem;
  line-height: 1.563rem;
`

export const SignUpText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.563rem;
  color: #fff;
`

export const CreateText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: .875rem;
  line-height: 1.188rem;
  color: #23DD7A;

  span {
    color: #fff;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`