import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
import { fireEvent, render, screen } from "@testing-library/react";

// Creamos un mock de las funciones de useCounter para poder verificar si se llama correctamente durante las pruebas
const handleAddMock = vi.fn()
const handleSubtractMock = vi.fn()
const handleResetMock = vi.fn()

// Mockeamos el hook useCounter para que devuelva un valor inicial de 40 y las funciones mockeadas
vi.mock('../hooks/useCounter', () => ({
  useCounter: () => ({
    counter: 40,
    handleAdd: handleAddMock,
    handleSubtrack: handleSubtractMock,
    handleReset: handleResetMock
  })
}))

describe('MyCounterAppMock', () => {

  test('should render the mock component', () => {
    render(<MyCounterApp />)

    screen.debug()
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain('counter: 40')
    expect(screen.getByRole('button', { name: '+1' })).toBeDefined()
    expect(screen.getByRole('button', { name: '-1' })).toBeDefined()
    expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined()
  })

  test('should call the handleAdd function when clicking the increment button', () => {
    render(<MyCounterApp />)

    const button = screen.getByRole('button', { name: '+1' })
    fireEvent.click(button)

    expect(handleAddMock).toHaveBeenCalled()
    expect(handleAddMock).toHaveBeenCalledTimes(1)
    expect(handleSubtractMock).not.toHaveBeenCalled()
    expect(handleResetMock).not.toHaveBeenCalled()
  })
})