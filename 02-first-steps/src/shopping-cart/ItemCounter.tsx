import { useState } from "react"

interface ItemCounterProps {
  name: string
  quantity?: number
}

export const ItemCounter = (props: ItemCounterProps) => {
  const { name, quantity = 1 } = props
  const [count, setCount] = useState(quantity)

  const handleAdd = () => {
    setCount((count) => (count + 1)) // se pueden ambas formas
  }
  const handleSubtract = () => {
    if (count === 1) return
    setCount(count - 1) //se pueden ambas formas
  }

  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 30,
        marginTop: 10,
      }}
    >
      <span
        style={{
          width: 150
        }}
      >
        {name}
      </span>
      <button
        onClick={handleAdd}
      >+1</button>
      <span>{count}</span>
      <button
        onClick={handleSubtract}
      >-1</button>
    </section>
  )
}