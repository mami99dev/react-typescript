import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

const previousSearches = [
  'goku',
  'mario bros',
  'stranger things',
  'the binding of isaac',
  'elden ring'
]

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(previousSearches)

  const handleTermClicked = (term: string) => {
    console.log({ term })
  }

  // Manejo de busqueda
  const handleSearch = (query: string = '') => {
    query = query.trim().toLowerCase()

    if (query.length === 0) return
    if (previousTerms.includes(query)) return

    setPreviousTerms([query, ...previousTerms].splice(0, 5))
  }

  return (
    <>
      {/* Header */}
      <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />

      {/* Search */}
      <SearchBar placeholder="Buscar gifs" buttonTitle="Buscar" onQuery={handleSearch} />

      {/* Busquedas previas */}
      <PreviousSearches subtitle="Busquedas previas" searches={previousTerms} onLabelClicked={handleTermClicked} />

      {/* Gifs */}
      <GifList gifs={mockGifs} />

    </>
  )
}