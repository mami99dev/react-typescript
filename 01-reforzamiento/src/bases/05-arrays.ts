//! No dejar que typescript infiera el tipo a menos que sepamos que estamos haciendo

const emptyArray: number[] = [] // Ts no puede inferir el tipo de un array vacío, por lo que debemos especificarlo
const numbersArray = [1, 2, 3, 4, 5] // Ts infiere el tipo de un array a partir de los elementos que contiene, en este caso, numbersArray es un array de números
const numbersAndStringsArray: (number|string)[] = [1, '2', 3, '4', 5] // Para que un array pueda contener elementos de diferentes tipos, debemos especificar el tipo de cada elemento, en este caso, numbersAndStringsArray es un array de números o strings y se especifica con la sintaxis (number|string)[]
const numbersAndObjectsArray = [1, { name: 'John' }, 3, { name: 'Jane' }]

console.log({emptyArray})

// numbersArray.push(6, '7') // Si intentamos agregar un elemento de un tipo diferente al tipo del array, TypeScript nos dará un error, ya que numbersArray es un array de números y '7' es un string pero esto es porque TS ya infirio el tipo
const numbersArray2 = numbersArray // Paso por referencia, si modificamos numbersArray2, también se modifica numbersArray
numbersArray2.push(6, 7)
const numbersArray3 = [...numbersArray] // Paso por valor, si modificamos numbersArray3, no se modifica numbersArray
numbersArray3.push(8, 9)
console.log({numbersArray, numbersArray2, numbersArray3})
// En el caso que tuvieramos un array de objetos, el paso por valor con spread no funcionaría, ya que los objetos siguen siendo referencias

const numbersAndObjectsArray2 = structuredClone(numbersAndObjectsArray) // Paso por valor, si modificamos numbersAndObjectsArray2, no se modifica numbersAndObjectsArray
numbersAndObjectsArray2.push(5, { name: 'Bob' })
console.log({numbersAndObjectsArray, numbersAndObjectsArray2})


numbersAndStringsArray.push('10')
numbersAndStringsArray.push(11)
console.log({numbersAndStringsArray})

//! Si intentamos sumar un número a un string, TypeScript nos dará un error, ya que no sabemos si el elemento es un número o un string
// for (const myNumber of numbersAndStringsArray) {
//   console.log(myNumber + 10)
// }