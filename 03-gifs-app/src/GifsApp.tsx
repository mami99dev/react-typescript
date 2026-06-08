import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

const previousSearches = [
  'Goku',
  'Mario Bros',
  'Sranger Things',
  'The binding of Isaac',
  'Elden ring'
]

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(previousSearches)

  const handleTermClicked = (term: string) => {
    console.log({ term })
  }

  return (
    <>
      {/* Header */}
      <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />

      {/* Search */}
      <SearchBar placeholder="Buscar gifs" buttonTitle="Buscar" />

      {/* Busquedas previas */}
      <PreviousSearches subtitle="Busquedas previas" searches={previousSearches} onLabelClicked={handleTermClicked} />

      {/* Gifs */}
      <GifList gifs={mockGifs} />

    </>
  )
}