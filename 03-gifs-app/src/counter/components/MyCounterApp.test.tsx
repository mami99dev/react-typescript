import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

describe('MyCounterApp', () => {
  test('should render the component', () => {
    render(<MyCounterApp />)

    screen.debug()

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain('counter: 5') // Esperamos que se haya renderizado correctamente el heading del counter
    expect(screen.getByRole('button', { name: '+1' })).toBeDefined() // Esperamos que se haya renderizado correctamente el boton de incremento
    expect(screen.getByRole('button', { name: '-1' })).toBeDefined() // Esperamos que se haya renderizado correctamente el boton de decremento
    expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined() // Esperamos que se haya renderizado correctamente el boton de reset
  })

  test('should increment the counter', () => {
    render(<MyCounterApp />)

    const labelH1 = screen.getByRole('heading', { level: 1 }) // Capturamos el h1 del contador
    const incrementButton = screen.getByRole('button', { name: '+1' }) // Capturamos el boton de incremento

    fireEvent.click(incrementButton) // Ejecutamos un click en el incremento

    expect(labelH1.innerHTML).toContain('counter: 6') // Esperamos que el contador aumente
  })

  test('should decrement the counter', () => {
    render(<MyCounterApp />)

    const labelH1 = screen.getByRole('heading', { level: 1 }) // Capturamos el h1 del contador
    const decrementButton = screen.getByRole('button', { name: '-1' }) // Capturamos el boton de decremento

    fireEvent.click(decrementButton) // Ejecutamos un click en el decremento

    expect(labelH1.innerHTML).toContain('counter: 4') // Esperamos que el contador disminuya
  })

  test('should reset the counter', () => {
    render(<MyCounterApp />)

    const labelH1 = screen.getByRole('heading', { level: 1 }) // Capturamos el h1 del contador
    const decrementButton = screen.getByRole('button', { name: '-1' }) // Capturamos el boton de decremento
    const resetButton = screen.getByRole('button', { name: 'Reset' }) // Capturamos el boton de reset

    fireEvent.click(decrementButton) // Ejecutamos un click en el decremento
    fireEvent.click(decrementButton) // Ejecutamos un click en el decremento
    fireEvent.click(decrementButton) // Ejecutamos un click en el decremento
    fireEvent.click(resetButton)

    expect(labelH1.innerHTML).toContain('counter: 5') // Esperamos que el contador este reseteado, es decir, con el valor inicial
  })
})