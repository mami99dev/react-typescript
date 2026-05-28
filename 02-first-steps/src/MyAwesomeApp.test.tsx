import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react'
import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp', () => {
  test('should render firstName and lastName', () => {
    const { container } = render(<MyAwesomeApp />) // container solo se va a actualizar cuando se llama a la funcion render
    screen.debug() // screen es util porque se actualiza atomaticamente cuando existen cambios o cuando se lanzan eventos

    // Container es el indicado cuando se quiere evaluar un estado inicial o que no va a cambiar dinamicamente
    const h1 = container.querySelector('h1')
    const h3 = container.querySelector('h3')

    // expect(1).toBe(2) //! Si una prueba falla no continua con las siguientes
    expect(h1?.innerHTML).toBe('Isaac') // Necesariamente debe tener ese valor
    expect(h1?.innerHTML).toContain('Isaac') // Necesariamente debe contener ese valor
    expect(h3?.innerHTML).toBe('Martinez')
    expect(h3?.innerHTML).toContain('Martinez')
  })

  test('should render firstName and lastName - screen', () => {
    render(<MyAwesomeApp />)
    screen.debug()

    // const h1 = screen.getByRole('heading', {
    //   level: 1
    // }) //! No es recomendable en este caso porque hay mas de una etiqueta h1 y te salta un error

    const h1 = screen.getByTestId('first-name-title') // Necesariamente la etiqueta debe tener un data attribute llamado data-testid
    expect(h1.innerHTML).toContain('Isaac')
  })

  test('should match snapshot', () => {
    const { container } = render(<MyAwesomeApp />)
    expect(container).toMatchSnapshot()
  })

  test('should match snapshot 2', () => {
    render(<MyAwesomeApp />)
    expect(screen.getByTestId('div-app')).toMatchSnapshot() ///! No es recomendable usar data attributes (data-testid) ya que son volatiles y no alteran el funcionamiento del aplicativo
  })
})