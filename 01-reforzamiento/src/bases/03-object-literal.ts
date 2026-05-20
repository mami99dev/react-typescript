const person = {
  firstName: 'Isaac',
  lastName: 'Martinez',
  age: 26
}

const ironman = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 48,
  address: {
    city: 'New York',
    zip: '12345',
  }
}

const spiderman = { ...ironman } // Al usar el operador de propagación (...), se crea un nuevo objeto spiderman que tiene las mismas propiedades y valores que el objeto ironman. Esto significa que spiderman tendrá las propiedades firstName, lastName, age y address con los mismos valores que ironman. Sin embargo, es importante destacar que el operador de propagación realiza una copia superficial del objeto, lo que significa que si ironman tiene propiedades anidadas (como address), spiderman también tendrá una referencia a ese mismo objeto anidado. Por lo tanto, si se modifica la propiedad address en ironman, también se verá reflejada en spiderman, ya que ambos objetos comparten la misma referencia a ese objeto anidado.

spiderman.firstName = 'Peter' // Al modificar la propiedad firstName de spiderman, no afecta a ironman, ya que son objetos diferentes.
spiderman.lastName = 'Parker'
spiderman.age = 18
spiderman.address.city = 'Queens' // Al modificar la propiedad city dentro del objeto address de spiderman, también se modifica en ironman, ya que ambos objetos comparten la misma referencia a ese objeto anidado.

//! La solución para evitar este problema de referencia compartida en objetos anidados es realizar una copia profunda

const hulk = {
  firstName: 'Bruce',
  lastName: 'Banner',
  age: 48,
  address: {
    city: 'Dayton',
    zip: '12345',
  }
}

const spidermanStructuredClone = structuredClone(hulk) // Al usar la función structuredClone, se crea una copia profunda del objeto hulk. Esto significa que spidermanStructuredClone tendrá las mismas propiedades y valores que hulk, pero no compartirá ninguna referencia a objetos anidados. Por lo tanto, si se modifica la propiedad address en hulk, no afectará a spidermanStructuredClone, ya que son objetos completamente independientes.

spidermanStructuredClone.firstName = 'Miles'
spidermanStructuredClone.lastName = 'Morales'
spidermanStructuredClone.age = 17
spidermanStructuredClone.address.city = 'Brooklyn' // Al modificar la propiedad city dentro del objeto address de spidermanStructuredClone, no afecta a hulk, ya que son objetos completamente independientes.

console.log(person, ironman, spiderman, hulk, spidermanStructuredClone)