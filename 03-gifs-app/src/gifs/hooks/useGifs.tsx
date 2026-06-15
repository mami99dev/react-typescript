import { useState } from "react"
import type { Gif } from "../interfaces/gif.interface"
import { getGifsByQuery } from "../actions/get-gifs-by-query.action"

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([])
  const [gifs, setGifs] = useState<Gif[]>([])

  const handleTermClicked = async (term: string) => {
    // No es óptimo porque no tiene caché
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
  }

  return {
    previousTerms,
    gifs,
    handleTermClicked,
    handleSearch
  }
}