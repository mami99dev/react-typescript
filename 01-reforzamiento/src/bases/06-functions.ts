function greet(name: string): string {
  return `Hello, ${name}!`
} // Para definir una función en TypeScript, debemos especificar el tipo de cada parámetro y el tipo de retorno de la función. En este caso, la función greet recibe un parámetro name de tipo string y devuelve un string.

const greet2 = (name: string): string => {
  return `Hello, ${name}!`
} // También podemos definir funciones utilizando la sintaxis de función flecha (arrow function). En este caso, la función greet2 es equivalente a la función greet, pero con una sintaxis diferente. La función greet2 recibe un parámetro name de tipo string y devuelve un string.

// const greet2 = (name: string): string => `Hello, ${name}!` // Funcion flecha simplificada

// const greet = function(name: string): string {
//   return `Hello, ${name}, good afternoon`
// } // También podemos definir funciones utilizando la sintaxis de función anónima (anonymous function). En este caso, no se puede asignar a greet otra función, ya que greet es una constante, pero la función anónima es equivalente a las funciones anteriores, recibe un parámetro name de tipo string y devuelve un string.

const message = greet('John')
const message2 = greet2('Jane')
console.log({message, message2})

interface User {
  uuid: string
  username: string
}

function getUser(): User {
  return {
    uuid: 'ABC-123',
    username: 'El_mami99'
  }
}

const getUser2 = (): User => {
  return {
    uuid: 'ABC-123',
    username: 'El_mami99'
  }
}

// const getUser2 = () => ({
//   uuid: 'ABC-123',
//   username: 'El_mami99'
// }) // Funcion flecha simplificada, si la función solo tiene una expresión, podemos omitir las llaves y el return, pero en este caso, como la función devuelve un objeto, debemos envolver el objeto entre paréntesis para que TypeScript lo interprete correctamente.

const user = getUser()
const user2 = getUser2()
console.log({user, user2})


const myNumbers: number[] = [1, 2, 3, 4, 5]
myNumbers.forEach((myNumber, index, arr) => {
  console.log(myNumber, index, arr)
})

//simplificar una función flecha eliminando argumentos redundantes
// myNumbers.forEach(console.log) // Si la función ejecutada dentro de un callback recibe los mismos parámetros que el callback, podemos pasar esa función directamente como callback, en este caso, console.log recibe tres parámetros: el valor del elemento, el índice del elemento y el array completo, por lo que podemos pasar console.log directamente como callback de forEach.

