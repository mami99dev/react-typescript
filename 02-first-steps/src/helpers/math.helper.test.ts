import { describe, expect, test } from 'vitest'
import { add, divide, multiply, subtract } from './math.helper'

describe('add', () => {
  test('should add two positives numbers', () => {
    //! 1. Arrange
    const a = 1
    const b = 2

    //! 2. Act
    const result = add(a, b)

    //! 3. Assert
    expect(result).toBe(a + b)
  })
})

describe('subtract', () => {
  const a = 2
  const b = 3
  const c = -a
  const d = -b

  test('should subtract two positive numbers', () => {
    const result = subtract(a, b)
    expect(result).toBe(a - b)
  })

  test('should subtract two negative numbers', () => {
    const result = subtract(c, d)
    expect(result).toBe(c - d)
  })
})

describe('multiply', () => {
  const a = 2
  const b = 3
  const c = 0

  test('should multiply two positive numbers', () => {
    const result = multiply(a, b)
    expect(result).toBe(a * b)
  })

  test('should result zero', () => {
    const result = multiply(a, c)
    expect(result).toBe(a * c)
  })
})

describe('divide', () => {
  const a = 2
  const b = 3

  test('should divide two positive numbers', () => {
    const result = divide(a, b)
    expect(result).toBe(a / b)
  })
})