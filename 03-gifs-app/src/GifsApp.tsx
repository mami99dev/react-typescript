import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {
  const searches = [
    'Goku',
    'Mario Bros',
    'Sranger Things',
    'The binding of Isaac',
    'Elden ring'
  ]
  return (
    <>
      {/* Header */}
      <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />

      {/* Search */}
      <SearchBar placeholder="Buscar gifs" buttonTitle="Buscar" />

      {/* Busquedas previas */}
      <PreviousSearches subtitle="Busquedas previas" searches={searches} />

      {/* Gifs */}
      <GifList gifs={mockGifs} />

    </>
  )
}