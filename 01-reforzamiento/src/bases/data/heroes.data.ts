//! Interfaces y Types no crea una estructura de datos en Javascript
//! Enum si crea una estructura de datos en Javascript, 
// interface y type solo existen en tiempo de compilación y no generan código JavaScript. enum si existe en tiempo de ejecución y genera código JavaScript.

//? Exportar tradicionalmente
export interface Hero {
  id: number;
  name: string;
  owner: HeroOwner;
} // No genera un 

interface Villain {
  id: number;
  name: string;
  owner: VillainOwner;
}

type HeroOwner = 'DC' | 'Marvel' // Tipos de datos son para cuando tengo valores especificos que quiero introducir 
enum VillainOwner {
  // DC, // Valor 0
  // Marvel // Valor 1
  DC = 'DC', // Asignamos el valor 'DC' al miembro DC del enum
  Marvel = 'Marvel' // Asignamos el valor 'Marvel' al miembro Marvel del enum
}

//? Exportar tradicionalmente
export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: 'DC',
  },
    {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel',
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC',
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC',
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel',
  },
  // {
  //   id: 6,
  //   name: 'Green Captain',
  //   owner: 'No owner', // Type '"No owner"' is not assignable to type 'HeroOwner'.
  // }, // Ts no permite poner otro tipo de HeroOwner
]

const villains: Villain[] = [
  {
    id: 1,
    name: 'Dr. Octopus',
    owner: VillainOwner.Marvel,
  },
  {
    id: 2,
    name: 'Joker',
    owner: VillainOwner.DC,
  },
  {
    id: 3,
    name: 'Thanos',
    owner: VillainOwner.Marvel,
  },
  {
    id: 4,
    name: 'Penguin',
    owner: VillainOwner.DC,
  },
  {
    id: 5,
    name: 'Electro',
    owner: VillainOwner.Marvel,
  },
  // {
  //   id: 6,
  //   name: 'Harley Queen',
  //   owner: 'DC' // Type '"DC"' is not assignable to type 'VillainOwner'.
  // }, // Para el caso de los Villains, al ser un enum, no se puede asignar un string directamente, sino que se debe usar la sintaxis del enum para asignar el valor correspondiente.
]

//? Exportar por defecto
//export default heroes