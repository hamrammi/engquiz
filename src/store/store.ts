
interface StoreInterface {
  phrases: Phrase[]
}

export interface Phrase {
  id: string,
  eng: string
  rus: string
}

const store: StoreInterface = {
  phrases: []
}

export default store
