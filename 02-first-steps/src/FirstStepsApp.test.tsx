import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

//! los Mocks se usan para simular el comportamiento de un componente o módulo, permitiendo controlar su salida y evitar efectos secundarios no deseados durante las pruebas.
vi.mock('./shopping-cart/ItemCounter', () => ({
  ItemCounter: () => <div data-testid="ItemCounter" /> // Esto hace que cada vez que se renderice el componente ItemCounter en FirstStepsApp, se renderice un div con el atributo data-testid="ItemCounter" en su lugar. Esto nos permite contar cuántas veces se renderiza el componente ItemCounter sin preocuparnos por su implementación interna o efectos secundarios.
})) // Mockeamos el componente ItemCounter para evitar que se renderice su contenido y así poder probar el número de veces que se renderiza en FirstStepsApp

describe('FirstStepsApp', () => {
  test('Should match snapshot', () => {
    const { container } = render(<FirstStepsApp />)
    expect(container).toMatchSnapshot() // En el snapshot se mostraran los ItemCounter como divs con el atributo data-testid="ItemCounter" en lugar de su contenido real, lo que nos permite verificar que se renderizan correctamente sin preocuparnos por su implementación interna.
  })

  test('Should render the correct number of ItemCounter components', () => {
    render(<FirstStepsApp />)

    const itemCounters = screen.getAllByTestId('ItemCounter') // Obtenemos todos los elementos que tienen el atributo data-testid="ItemCounter" que ya ha sido mockeado, lo que nos permitirá contar cuántas veces se renderiza el componente ItemCounter en FirstStepsApp

    expect(itemCounters.length).toBe(3) // Esperamos que se rendericen 3 componentes ItemCounter
  })

})