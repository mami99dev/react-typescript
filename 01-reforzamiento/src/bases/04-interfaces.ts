interface Person {
  firstName: string
  lastName: string
  age: number
  // address: {
  //   city: string;
  //   zip: string;
  // }  No es tan común definir un tipo de dato anidado dentro de una interfaz, es mejor definirlo como una interfaz aparte
  address?: Address // El signo de interrogación indica que esta propiedad es opcional, es decir, no es necesario que un objeto de tipo Person tenga una propiedad address
}

interface Address {
  city: string
  zip: string
}

const ironman: Person = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 48,
  address: {
    city: 'New York',
    zip: '12345',
  }
}

const spiderman: Person = {
  firstName: "Peter",
  lastName: "Parker",
  age: 20
}

console.log(ironman, spiderman);