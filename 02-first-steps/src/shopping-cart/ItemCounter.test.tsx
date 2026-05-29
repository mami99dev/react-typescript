import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";
import { fireEvent, render, screen } from "@testing-library/react";

describe('ItemCounter', () => {
  test('should render with default values', () => {
    const name = 'Test item'

    render(<ItemCounter name={name} />)

    expect(screen.getByText(name)).toBeDefined()
    expect(screen.getByText(name)).not.toBeNull() // Estaria evaluando lo mismo que arriba pero de otra forma
  })

  test('should render with custom quantity', () => {
    const name = 'Test item'
    const quantity = 2

    render(<ItemCounter name={name} quantity={quantity} />)

    expect(screen.getByText(quantity)).toBeDefined() //! Aqui getByText convierte el numero en texto en automatico
    expect(screen.getByText(quantity)).not.toBeNull()
  })

  test('should increase count when +1 button is pressed', () => {
    render(<ItemCounter name='Test item' quantity={1} />)

    // Recuperar el boton
    const [buttonAdd] = screen.getAllByRole('button') // Se trabaja con el screen porque necesito mantener actualizados los cambios del componente si es que hubieran

    //! Disparar el evento de presionar el boton
    fireEvent.click(buttonAdd) // fireEvent.click() Ejecuta el handleAdd del boton o el codigo que este dentro del evento click()

    expect(screen.getByText('2')).toBeDefined() // Se evalua que efectivamente se sumo un producto
  })

  test('should decrease count when -1 button is pressed', () => {
    // Preparar variables a evaluar
    const quantity = 2
    const quantityCount = 1

    // Inicializar el componente (renderizarlo)
    render(<ItemCounter name='Item test' quantity={quantity} />)

    // Recuperar el boton que vamos a probar
    const [, buttonDecrease] = screen.getAllByRole('button')

    // Ejecutar el evento click en el boton recuperado
    fireEvent.click(buttonDecrease)

    // Ejecutar la prueba
    expect(Number(screen.getByTitle('item-count').innerHTML)).toBe(quantityCount) // Agregue un title attribute para recuperar exactamente el span de la cuenta debido a que con screen.getAllByRole('span') no es posible
  })

  test('should not decrease count when -1 button is pressed and quantity is 1', () => {
    // Preparar variables a evaluar
    const quantity = 1
    const quantityCount = 1

    // Inicializar el componente (renderizarlo)
    render(<ItemCounter name='Item test' quantity={quantity} />)

    // Recuperar el boton que vamos a probar
    const [, buttonDecrease] = screen.getAllByRole('button')

    // Ejecutar el evento click en el boton recuperado
    fireEvent.click(buttonDecrease)

    // Ejecutar la prueba
    expect(screen.getByText(quantityCount)).toBeDefined()
  })

  test('should render name if it received string without be a js expression', () => {
    const quantity = 1
    render(<ItemCounter name='Test item' quantity={quantity} />)

    const span = screen.findByText('Test item')
    expect(span).toBeDefined()
  })

  test('should change to red when count is 1', () => {
    const quantity = 1
    const name = 'Test item'
    render(<ItemCounter name={name} quantity={quantity} />)

    const itemText = screen.getByText(name)

    expect(itemText.style.color).toBe('red')
  })

  test('should change to black when count is greater than 1', () => {
    const quantity = 2
    const name = 'Test item'
    render(<ItemCounter name={name} quantity={quantity} />)

    const itemText = screen.getByText(name)

    expect(itemText.style.color).toBe('black')
  })
})