import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

const mockItemCounter = vi.fn((props: unknown) => {
  return (
    <div data-testid="ItemCounter" />
  )
})

vi.mock('./shopping-cart/ItemCounter', () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props)
}))

describe('FirstStepsApp', () => {
  //! Existen funciones que se ejecutan antes o después de cada test, o de toda la suite de tests
  afterEach(() => {
    vi.clearAllMocks() // Limpia el estado de los mocks después de cada test, para evitar que las llamadas a los mocks se acumulen entre tests
  })

  test('Should match snapshot', () => {
    const { container } = render(<FirstStepsApp />)
    expect(container).toMatchSnapshot()
  })

  test('Should render the correct number of ItemCounter components', () => {
    render(<FirstStepsApp />)

    const itemCounters = screen.getAllByTestId('ItemCounter')

    expect(itemCounters.length).toBe(3)
  })

  test('Should render ItemCounter with correct props', () => {
    render(<FirstStepsApp />)

    expect(mockItemCounter).toHaveBeenCalledTimes(3) // Verifica que el mock de ItemCounter se haya llamado exactamente 3 veces, lo que indica que se renderizaron 3 componentes ItemCounter
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Nintendo Switch 2', quantity: 1
    }) // Verifica que el mock de ItemCounter se haya llamado con las props correctas para el primer producto
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Pro controller', quantity: 4
    }) // Verifica que el mock de ItemCounter se haya llamado con las props correctas para el segundo producto
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Super Smash', quantity: 2
    }) // Verifica que el mock de ItemCounter se haya llamado con las props correctas para el tercer producto
  })

})