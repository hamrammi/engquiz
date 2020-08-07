import React, { useState } from 'react'
import { database } from '../../firebase'
import {
  Container,
  Input,
  Title,
  InputBlock,
  InputLabel,
  Button,
  ButtonContainer,
  ErrorAlert,
  SuccessAlert
} from './styles'

const AddPhrase: React.FC = () => {
  const [eng, setEng] = useState<string>('')
  const [rus, setRus] = useState('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [successMessage, setSuccessMessage] = useState<string>('')

  function onSubmit () {
    if (eng === '' || rus === '') {
      setErrorMessage(`Fields can't be blank`)
      setTimeout(() => setErrorMessage(''), 2000)
      return
    }
    database.collection('phrases').add({
      eng,
      rus
    })
      .then(docRef => {
        setSuccessMessage(`New ID: ${docRef.id}`)
        setTimeout(() => setSuccessMessage(''), 2000)
        setEng('')
        setRus('')
      })
      .catch(function(error) {
        alert("Error adding document: " + error)
      });
  }

  return (
    <Container>
      <Title><span className="text">Add phrase</span></Title>
      {errorMessage ? <ErrorAlert>{errorMessage}</ErrorAlert> : null}
      {successMessage ? <SuccessAlert>{successMessage}</SuccessAlert> : null}
      <form onSubmit={e => { e.preventDefault(); onSubmit() }}>
        <InputBlock>
          <InputLabel htmlFor="eng"><span role="img" aria-label="Eng">🇺🇸</span> English</InputLabel>
          <Input
            type="text"
            value={eng}
            onChange={e => setEng(e.target.value)}
            id="eng"
          />
        </InputBlock>
        <InputBlock>
          <InputLabel htmlFor="rus"><span role="img" aria-label="Rus">🇷🇺</span> Russian</InputLabel>
          <Input
            type="text"
            value={rus}
            onChange={e => setRus(e.target.value)}
            id="rus"
          />
        </InputBlock>
        <ButtonContainer>
          <Button type="submit">Add</Button>
        </ButtonContainer>
      </form>
    </Container>
  )
}

export default AddPhrase
