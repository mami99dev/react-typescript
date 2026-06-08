import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
  placeholder?: string;
  buttonTitle: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = 'Buscar', buttonTitle, onQuery }: Props) => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query)
    }, 700)

    return () => {
      clearTimeout(timeoutId)
    } // Funcion de limpieza se ejecuta cuando el componente se desmonta o se va a volver a disparar el efecto, es decir cuando las dependencias cambian y se ejecuta la funcion callback
  }, [query]) // En las ultimas versiones de react ya no es necesario colocar funciones en las dependencias para que el useEffect se ejecute

  const handleSearch = () => {
    onQuery(query)
    setQuery('')
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>{buttonTitle}</button>
    </div>
  )
}