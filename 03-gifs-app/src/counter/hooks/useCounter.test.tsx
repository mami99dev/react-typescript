import { act, renderHook } from "@testing-library/react";
import { describe, test, expect } from 'vitest';
import { useCounter } from "./useCounter";

describe('useCounter', () => {
  const initialValue = 20

  test('should initialize with initialValue', () => {
    const { result } = renderHook(() => useCounter(initialValue))

    expect(result.current.counter).toBe(initialValue)
  })
  test('should increment counter when handleAdd is called', () => {
    const { result } = renderHook(() => useCounter(initialValue))

    act(() => result.current.handleAdd())

    expect(result.current.counter).toBe(initialValue + 1)
  })
  test('should decrement counter when handleSubtract is called', () => {
    const { result } = renderHook(() => useCounter(initialValue))

    act(() => result.current.handleSubtract())

    expect(result.current.counter).toBe(initialValue - 1)

  })
  test('should reset to initialValue the counter when handleReset is called', () => {
    const { result } = renderHook(() => useCounter(initialValue))

    act(() => {
      result.current.handleSubtract()
      result.current.handleSubtract()
      result.current.handleSubtract()
      result.current.handleSubtract()
      result.current.handleSubtract()
    }) // Se puede mandar a llamar varias acciones dentro de un act pero no es buena practica, ya que cuesta trabajo entender que es lo que esta probando cada bloque
    expect(result.current.counter).toBe(initialValue - 5)

    act(() => result.current.handleReset()) // es mejor solo dejar una accion
    expect(result.current.counter).toBe(initialValue)
  })
})