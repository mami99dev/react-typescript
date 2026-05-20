const firstName: string = 'Isaac' // No se puede reasignar un valor a una variable declarada con const.
const lastName = 'Martinez' // Es de tipo 'Martinez' ya que es una constante y typescript asigna automáticamente ese tipo de dato porque no se puede reasignar.

let diceNumber = 0
diceNumber = 5

const containsLetterA = firstName.includes('a') || firstName.includes('A') // El resultado de esta expresión es un booleano, por lo que el tipo de dato de containsLetterA es boolean.

console.log({firstName, lastName, diceNumber, containsLetterA})