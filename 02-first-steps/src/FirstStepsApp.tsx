import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: 'Nintendo Switch 2', quantity: 1 },
  { productName: 'Pro controller', quantity: 4 },
  { productName: 'Super Smash', quantity: 2 },
]

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {
        itemsInCart.map(({ productName, quantity }) => (
          // Se requiere agregar un key cada que se renderiza un ItemCounter
          <ItemCounter key={productName} name={productName} quantity={quantity} /> //No usar index como el valor de key
        ))
      }

      {/* <ItemCounter name='Nintendo Switch 2' quantity={1} />
      <ItemCounter name='Pro controller' quantity={2} />
      <ItemCounter name='Super Smash' quantity={1} /> */}
    </>
  )
}