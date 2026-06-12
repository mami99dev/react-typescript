import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([])
  const [gifs, setGifs] = useState<Gif[]>([])

  const handleTermClicked = (term: string) => {
    console.log({ term })
  }

  // Manejo de busqueda
  const handleSearch = async (query: string = '') => {
    query = query.trim().toLowerCase()

    if (query.length === 0) return
    if (previousTerms.includes(query)) return

    setPreviousTerms([query, ...previousTerms].splice(0, 5))

    const searchedGifs = await getGifsByQuery(query)
    setGifs(searchedGifs)
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
      <GifList gifs={gifs} />

    </>
  )
}