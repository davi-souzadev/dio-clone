import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  height: 2.938rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Wrapper = styled.div`
  background-color: #151515;
  width: 100%;
  height: 2.938rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SearchInputContainer = styled.div`
  width: 17.188rem;
  height: 1.875rem;
  background-color: #2d2d37;
  border-radius: .5rem;
  padding: .125rem .313rem;
  margin: 0 .75rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Menu = styled.a`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-size: 1.125rem;
  line-height: 1.563rem;
  color: #fff;
  margin-right: .75rem;
  text-decoration: none;
`

export const MenuRight = styled.a`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-size: .75rem;
  line-height: 1.563rem;
  color: #fff;
  margin-right: .75rem;
  text-decoration: none;
  cursor: pointer;
`

export const UserPicture = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 1.375rem;
  border: 2px solid #fff;
`

export const Input = styled.input`
  width: 17.188rem;
  height: 1.875rem;
  border-radius: .5rem;
  background-color: transparent;
  flex: 1;
  border: none;
  color: #fff;
`