//! Los genericos (<>) son parametros para tipos, en este caso la promesa resuelve un number

const myPromise= new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(100)
    // reject('Mi amigo se dio a la fuga')
  }, 2000)
})

myPromise
  .then((myMoney) => {
    // En caso de que la promesa devuelva un resolve
    console.log(`Me regresaron ${myMoney}`)
  })
  .catch((reason) => {
    // En caso de que la promesa devuelva un reject
    console.warn(reason)
  })
    // Despues de que se ejecuto la promesa
  .finally(() => {
    console.log('La vida sigue...')
  })