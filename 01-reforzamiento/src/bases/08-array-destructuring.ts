const characterNames = ['Goku', 'Vegeta', 'Piccolo']
const [first, second, third] = characterNames
console.log({ first, second, third })

const [,,piccolo] = characterNames
console.log({ piccolo })

const returnsArrayFn = () => {
  return ['ABC', 123] as const; // El as const es una forma de decirle a TypeScript que el tipo de retorno de esta función es un array con un número fijo de elementos y con tipos específicos para cada elemento, en este caso, el primer elemento es un string literal 'ABC' y el segundo elemento es un number literal 123, esto permite que al hacer destructuring de este array, TypeScript sepa exactamente qué tipo de dato se está extrayendo y pueda inferir correctamente los tipos de las variables resultantes.
}

const [letters, numbers] = returnsArrayFn()
console.log({ letters, numbers })