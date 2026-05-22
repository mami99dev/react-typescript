/** 
 *! Si en el modulo se exporta por defecto (export default) entonces aqui se importa sin necesariamente escribir el mismo nombre, de la siguiente manera:
 * import myHeroes from "./data/heroes.data"
*/ 

/** 
 *! Si en el modulo se exporta tradicionalmente (export) entonces aqui se importa necesariamente con el mismo nombre que se exporto y entre llaves, de la siguiente manera:
 * import { heroes } from "./data/heroes.data"
*/ 


import { heroes, type Hero } from "./data/heroes.data" //* Si importas un type es importante anteponerle que es un type para agilizarle las cosas a TS

const getHeroById = (id: number): Hero|undefined => {
  const hero = heroes.find((hero) => {
    return hero.id === id
  })
  // if (!hero) {
  //   throw new Error(`No existe un hero con el id ${id}`)
  // }
  
  return hero
}

console.log(getHeroById(8))