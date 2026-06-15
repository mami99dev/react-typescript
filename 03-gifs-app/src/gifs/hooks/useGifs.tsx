import { useState } from "react"
import type { Gif } from "../interfaces/gif.interface"
import { getGifsByQuery } from "../actions/get-gifs-by-query.action"

// Se declara afuera del componente ya que asi evitamos la perdida de informacion en el re-render del componente
const gifsCache: Record<string, Gif[]> = {}

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([])
  const [gifs, setGifs] = useState<Gif[]>([])

  const handleTermClicked = async (term: string) => {
    // Si existe en memoria entonces ya no hace la peticion http
    if (gifsCache[term]) {
      setGifs(gifsCache[term])
      return
    }

    const searchedGifs = await getGifsByQuery(term)
    setGifs(searchedGifs)
  }

  // Manejo de busqueda
  const handleSearch = async (query: string = '') => {
    query = query.trim().toLowerCase()

    if (query.length === 0) return
    if (previousTerms.includes(query)) return

    setPreviousTerms([query, ...previousTerms].splice(0, 5))

    const searchedGifs = await getGifsByQuery(query)
    setGifs(searchedGifs)

    gifsCache[query] = searchedGifs
  }

  return {
    previousTerms,
    gifs,
    handleTermClicked,
    handleSearch
  }
}