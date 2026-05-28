import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";
import { render, screen } from "@testing-library/react";

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
})