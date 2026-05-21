function greet(name: string): string {
  return `Hello, ${name}!`
} // Para definir una función en TypeScript, debemos especificar el tipo de cada parámetro y el tipo de retorno de la función. En este caso, la función greet recibe un parámetro name de tipo string y devuelve un string.

const greet2 = (name: string): string => {
  return `Hello, ${name}!`
} // También podemos definir funciones utilizando la sintaxis de función flecha (arrow function). En este caso, la función greet2 es equivalente a la función greet, pero con una sintaxis diferente. La función greet2 recibe un parámetro name de tipo string y devuelve un string.

// const greet = function(name: string): string {
//   return `Hello, ${name}, good afternoon`
// } // También podemos definir funciones utilizando la sintaxis de función anónima (anonymous function). En este caso, no se puede asignar a greet otra función, ya que greet es una constante, pero la función anónima es equivalente a las funciones anteriores, recibe un parámetro name de tipo string y devuelve un string.

const message = greet('John')
const message2 = greet2('Jane')
console.log({message, message2})

function getUser() {
  return {
    uuid: 'ABC-123',
    username: 'El_mami99'
  }
}

const getUser2 = () => {
  return {
    uuid: 'ABC-123',
    username: 'El_mami99'
  }
}

const user = getUser()
const user2 = getUser2()
console.log({user, user2})
