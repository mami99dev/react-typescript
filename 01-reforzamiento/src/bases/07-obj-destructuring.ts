const person = {
  name: 'Tony',
  age: 45,
  key: 'Ironman',
  rank: 'A',
}

const { name, age, key } = person // Destructuración de objetos
console.log({ name, age, key })

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
  power?: string;
}

const useContext = ({ name, key, age, rank = 'sin rango', power = 'sin poder' }: Hero) => {
  return {
    keyName: key,
    user: {
      name,
      age
    },
    rank,
    power
  }
}

const { keyName, user: { name: userName, age: userAge }, rank, power } = useContext(person) // Desestructuración anidada, se usa el alias para evitar conflictos de nombres, los alias se pueden usar para renombrar las variables que se extraen del objeto, esto es útil cuando el nombre de la propiedad no es adecuado para el contexto en el que se va a usar, o cuando se quiere evitar conflictos de nombres con otras variables en el mismo ámbito.

console.log({ keyName, userName, userAge, rank, power })