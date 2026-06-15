import { useRef, useState } from "react"
import type { Gif } from "../interfaces/gif.interface"
import { getGifsByQuery } from "../actions/get-gifs-by-query.action"

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([])
  const [gifs, setGifs] = useState<Gif[]>([])
  const gifsCache = useRef<Record<string, Gif[]>>({}) //$ Se hace uso de useRef para no perder los datos en los re-renderizados del componente.

  const handleTermClicked = async (term: string) => {
    // Si existe en memoria entonces ya no hace la peticion http
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]) //$ Se accede a la propiedad current del useRef para obtener el valor actual del cache
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

    gifsCache.current[query] = searchedGifs
  }

  return {
    previousTerms,
    gifs,
    handleTermClicked,
    handleSearch
  }
}