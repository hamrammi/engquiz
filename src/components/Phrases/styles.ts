import styled from 'styled-components'

export const Container = styled('div')`
 display: flex;
 flex-direction: column;
 align-items: center;
`

export const Title = styled('div')`
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-transform: uppercase;
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-family: 'Alegreya Sans', sans-serif;
  
  & .text {
    font-weight: 900;
  }
`

export const InputBlock = styled('div')`
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin-bottom: 2rem;
  
  & label {
    font-weight: 900;
  }
`

export const Input = styled('input').attrs({
  autoComplete: 'off'
})`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid palevioletred;
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 2rem; 
  outline: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: palevioletred;
`

export const InputLabel = styled('label')`
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 1.2rem;
`

export const ButtonContainer = styled('div')`
  display: flex;
  justify-content: center;
`

export const Button = styled('button')`
  background-color: palevioletred;
  font-family: 'Alegreya Sans', sans-serif;
  border: none;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 10px;
  color: white;
  outline: none;
`

export const PhrasesContainer = styled('div')`
  width: 50vw;
  font-family: 'Alegreya Sans', sans-serif;
  color: #333;
  font-size: 1.5rem;
  
  & .item {
    padding-top: .5rem;
    padding-bottom: .5rem;
  }
  
  & .eng {
    padding-right: .5rem;
  }
  
  & .rus {
    color: palevioletred;
    padding-left: .5rem;
  }
`
