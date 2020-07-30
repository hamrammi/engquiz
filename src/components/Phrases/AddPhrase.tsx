import React, { useState } from 'react'
import { database } from '../../firebase'
import { Container, Input, Title, InputBlock, InputLabel, Button, ButtonContainer } from './styles'

const AddPhrase: React.FC = () => {
  const [eng, setEng] = useState<string>('')
  const [rus, setRus] = useState('')

  function onSubmit () {
    database.collection('phrases').add({
      eng,
      rus
    })
      .then(docRef => {
        alert('New ID: ' + docRef.id)
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
