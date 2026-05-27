import { describe, test } from "vitest";
import { render, screen } from '@testing-library/react'
import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp', () => {
  test('should render firstName and lastName', () => {
    console.log({ documentBody: document.body }) // el document.body lo habilita vitest
    const { container } = render(<MyAwesomeApp />)
    console.log({ container })

    render(<MyAwesomeApp />)

    screen.debug() // Imprime la renderizacion del componente
  })
})