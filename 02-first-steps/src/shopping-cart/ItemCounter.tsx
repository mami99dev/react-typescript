interface ItemCounterProps {
  name: string
  quantity: number
}

export const ItemCounter = (props: ItemCounterProps) => {
  const { name, quantity } = props
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
      <button>+1</button>
      <span>{quantity}</span>
      <button>-1</button>
    </section>
  )
}