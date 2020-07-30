import React, { useEffect, useState } from 'react'
import { Phrase } from '../../store/store'
import { database } from '../../firebase'
import { Container, Input, InputBlock, InputLabel, PhrasesContainer, Title } from './styles'

const ListPhrases: React.FC = () => {
  const [phrases, setPhrases] = useState<Phrase[]>([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    let phrases: Phrase[] = []
    database.collection('phrases').get().then(snapshot => {
      snapshot.forEach(doc => {
        phrases.push({
          id: doc.id,
          ...doc.data()
        } as Phrase)
      })
      setPhrases(phrases)
    })
  }, [])

  const filteredPhrases = phrases.filter((p) => {
    if (searchText === '') {
      return true
    }
    return p.eng === searchText
  })

  return (
    <Container>
      <Title>Phrases</Title>
      <InputBlock>
        <InputLabel htmlFor="eng"><span role="img" aria-label="Eng">🇺🇸</span> English</InputLabel>
        <Input
          type="text"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      </InputBlock>
      <PhrasesContainer>
        {filteredPhrases.map(p => (
          <div key={p.id} className="item">
            <span className="eng">{p.eng}</span> - <span className="rus">{p.rus}</span>
          </div>
        ))}
        {phrases.length === 0 ? <i>No results</i> : null}
      </PhrasesContainer>
    </Container>
  )
}

export default ListPhrases
